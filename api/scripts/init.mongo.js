/*
 * Run using the mongo shell. For remote databases, ensure that the
 * connection string is supplied in the command line. For example:
 * localhost:
 *   mongo productTracker scripts/init.mongo.js
/

/* global db print */
/* eslint no-restricted-globals: "off" */

db.products.remove({});

const initialProducts = [
  {
    id: 1,
    name: 'Lee',
    category: 'Jeans',
    price: '50',
    imageUrl: 'https://images.lee.com/is/image/Lee/3051867-HERO?$KDP-XLARGE$',
  },
  {
    id: 2,
    name: 'GAP',
    category: 'Shirts',
    price: '20',
    imageUrl: 'https://www.gapfactory.com/webcontent/0020/506/026/cn20506026.jpg',
  },
];

db.products.insertMany(initialProducts);
const count = db.products.count();
print('Inserted total of ', count, 'products');

db.counters.remove({ _id: 'products' });
db.counters.insert({ _id: 'products', current: count });

db.products.createIndex({ id: 1 }, { unique: true });
db.products.createIndex({ name: 1 });
db.products.createIndex({ price: 1 });
db.products.createIndex({ category: 1 });
