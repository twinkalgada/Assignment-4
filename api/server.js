const fs = require('fs');
require('dotenv').config();
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { MongoClient } = require('mongodb');

const url = process.env.DB_URL
  || 'mongodb+srv://twinkalgada:twinkalgada@cluster.jisdo.mongodb.net/inventoryTracker?retryWrites=true&w=majority';

let db;

/**
 * Increments the current counter of the specific collection by 1.
 * @param {string} name Name of the collection for which the counter is needed
 * @returns Next id number in the sequence
 */
async function getNextSequence(name) {
  const result = await db
    .collection('counters')
    .findOneAndUpdate(
      { _id: name },
      { $inc: { current: 1 } },
      { returnOriginal: false },
    );
  return result.value.current;
}

/**
 * Fetches all products from database.
 * @returns List of products
 */
async function productList() {
  const products = await db.collection('products').find({}).toArray();
  return products;
}

/**
 * Adds the new product to the databse. Accepts an object with Product as the second parameter.
 * @returns Currently added product
 */
async function addProduct(_, { product }) {
  // eslint-disable-next-line no-param-reassign
  product.id = await getNextSequence('products');

  const result = await db.collection('products').insertOne(product);
  const currentlyAddedProduct = await db
    .collection('products')
    .findOne({ _id: result.insertedId });
  return currentlyAddedProduct;
}

/**
 * Connects to the databse and sets the 'db' variable to the mongo client db.
 */
async function connectToDb() {
  const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  console.log('Connected to MongoDB at', url);
  db = client.db();
}

const resolvers = {
  Query: {
    productList,
  },
  Mutation: {
    addProduct,
  },
};

/* Initial Server setup */
const server = new ApolloServer({
  typeDefs: fs.readFileSync('schema.graphql', 'utf-8'),
  resolvers,
});

const app = express();

server.applyMiddleware({ app, path: '/graphql' });

const port = process.env.API_SERVER_PORT || 3000;

// eslint-disable-next-line func-names
(async function () {
  try {
    await connectToDb();
    app.listen(3000, () => {
      console.log(`API server started at port ${port}`);
    });
  } catch (error) {
    console.log('Error connecting to DB - ', error);
  }
}());
