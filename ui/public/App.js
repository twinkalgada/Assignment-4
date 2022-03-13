"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* eslint-disable react/destructuring-assignment */

/* eslint "react/react-in-jsx-scope": "off" */

/* globals React ReactDOM */

/* eslint "react/jsx-no-undef": "off" */

/* eslint "no-alert": "off" */
var productTableHeadings = ['Product Name', 'Price', 'Category', 'Image'];
var NO_DATA_AVAILABLE = 'No Data Available';
/**
 * Renders a single Row in the Product table
 * @param props Expects props as a 'product' object which contains
 * name, price, category and imageUrl.
 */

function ProductTableRow(_ref) {
  var product = _ref.product;
  var name = product.name,
      price = product.price,
      category = product.category,
      imageUrl = product.imageUrl;
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, name || NO_DATA_AVAILABLE), /*#__PURE__*/React.createElement("td", null, price ? "$".concat(price) : NO_DATA_AVAILABLE), /*#__PURE__*/React.createElement("td", null, category), /*#__PURE__*/React.createElement("td", null, imageUrl ? /*#__PURE__*/React.createElement("a", {
    href: imageUrl,
    target: "_blank",
    rel: "noreferrer"
  }, "View") : NO_DATA_AVAILABLE));
}
/**
 * Renders the Product Table
 * @param props Expects 'headings' and 'products' array as props
 */


function ProductTable(props) {
  var headings = props.headings,
      products = props.products,
      loading = props.loading;
  var productTableRows = products.map(function (product) {
    return /*#__PURE__*/React.createElement(ProductTableRow, {
      key: product.id,
      product: product
    });
  });
  var initialTableMessage = loading ? 'Loading products...' : 'No Products added yet';
  return /*#__PURE__*/React.createElement("table", {
    className: "table"
  }, /*#__PURE__*/React.createElement("thead", {
    className: "text-left"
  }, /*#__PURE__*/React.createElement("tr", null, headings.map(function (heading, index) {
    return (
      /*#__PURE__*/
      // using index as keys as Table Headings will not change dynamically
      // eslint-disable-next-line implicit-arrow-linebreak, react/no-array-index-key
      React.createElement("th", {
        key: index
      }, heading)
    );
  }))), /*#__PURE__*/React.createElement("tbody", null, products.length > 0 ? productTableRows : /*#__PURE__*/React.createElement("tr", {
    className: "text-center"
  }, /*#__PURE__*/React.createElement("td", {
    colSpan: "4"
  }, initialTableMessage))));
}
/**
 * Product Add Form.
 * Expects 'addProduct' function as a prop.
 * Uses a controlled state for 'Price' input element for adding '$'.
 * And for rest of the elements, it uses native 'forms' object from DOM.
 */


var ProductAdd = /*#__PURE__*/function (_React$Component) {
  _inherits(ProductAdd, _React$Component);

  var _super = _createSuper(ProductAdd);

  function ProductAdd() {
    var _this;

    _classCallCheck(this, ProductAdd);

    _this = _super.call(this);
    _this.state = {
      price: '$'
    };
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.handlePriceChange = _this.handlePriceChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ProductAdd, [{
    key: "handleSubmit",
    value: function handleSubmit(event) {
      event.preventDefault();
      var _document$forms$produ = document.forms.productAdd,
          name = _document$forms$produ.name,
          price = _document$forms$produ.price,
          category = _document$forms$produ.category,
          imageUrl = _document$forms$produ.imageUrl;
      var priceWithoutDollar = price.value.substring(1); // Getting value without '$'

      var product = {
        name: name.value,
        price: parseFloat(priceWithoutDollar),
        category: category.value,
        imageUrl: imageUrl.value
      };
      this.props.addProduct(product); // Resetting the Form to initial value

      name.value = '';
      category.value = 'Shirts';
      imageUrl.value = '';
      this.setState({
        price: '$'
      });
    }
  }, {
    key: "handlePriceChange",
    value: function handlePriceChange(event) {
      var priceWithoutDollar = event.target.value.substring(1); // Getting value without '$'

      this.setState({
        price: "$".concat(priceWithoutDollar)
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("form", {
        name: "productAdd",
        onSubmit: this.handleSubmit,
        className: "custom-form"
      }, /*#__PURE__*/React.createElement("div", {
        className: "form-element"
      }, /*#__PURE__*/React.createElement("label", {
        htmlFor: "category",
        className: "label"
      }, "Category", /*#__PURE__*/React.createElement("select", {
        name: "category",
        className: "form-element-select"
      }, /*#__PURE__*/React.createElement("option", {
        value: "Shirts"
      }, "Shirts"), /*#__PURE__*/React.createElement("option", {
        value: "Jeans"
      }, "Jeans"), /*#__PURE__*/React.createElement("option", {
        value: "Jackets"
      }, "Jackets"), /*#__PURE__*/React.createElement("option", {
        value: "Sweaters"
      }, "Sweaters"), /*#__PURE__*/React.createElement("option", {
        value: "Accessories"
      }, "Accessories")))), /*#__PURE__*/React.createElement("div", {
        className: "form-element"
      }, /*#__PURE__*/React.createElement("label", {
        htmlFor: "price",
        className: "label"
      }, "Price Per Unit", /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "price",
        value: this.state.price,
        onChange: this.handlePriceChange,
        className: "form-element-input"
      }))), /*#__PURE__*/React.createElement("div", {
        className: "form-element"
      }, /*#__PURE__*/React.createElement("label", {
        htmlFor: "name",
        className: "label"
      }, "Product Name", /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "name",
        required: true,
        className: "form-element-input"
      }))), /*#__PURE__*/React.createElement("div", {
        className: "form-element"
      }, /*#__PURE__*/React.createElement("label", {
        htmlFor: "imageUrl",
        className: "label"
      }, "Image URL", /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "imageUrl",
        className: "form-element-input"
      }))), /*#__PURE__*/React.createElement("button", {
        type: "submit",
        className: "button button-dark"
      }, "Add Product"));
    }
  }]);

  return ProductAdd;
}(React.Component);
/**
 * Generic function to fetch graphQL queries and mutations
 * @param query GraphQL query to be sent in the body
 * @param variables Query variable to be passed with the query. Defaults to {}
 */


function graphQLFetch(_x) {
  return _graphQLFetch.apply(this, arguments);
}
/**
 * Entry Point of our Application. Renders the whole page from here.
 */


function _graphQLFetch() {
  _graphQLFetch = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(query) {
    var variables,
        response,
        result,
        error,
        _args3 = arguments;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            variables = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {};
            _context3.prev = 1;
            _context3.next = 4;
            return fetch(window.ENV.UI_API_ENDPOINT, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                query: query,
                variables: variables
              })
            });

          case 4:
            response = _context3.sent;
            _context3.next = 7;
            return response.json();

          case 7:
            result = _context3.sent;

            if (result.errors) {
              error = result.errors[0];
              alert('Error while quering for data - ', error);
            }

            return _context3.abrupt("return", result.data);

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](1);
            alert("Error in sending data to server: ".concat(_context3.t0.message));
            return _context3.abrupt("return", null);

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 12]]);
  }));
  return _graphQLFetch.apply(this, arguments);
}

var ProductList = /*#__PURE__*/function (_React$Component2) {
  _inherits(ProductList, _React$Component2);

  var _super2 = _createSuper(ProductList);

  function ProductList() {
    var _this2;

    _classCallCheck(this, ProductList);

    _this2 = _super2.call(this);
    _this2.state = {
      products: [],
      initialLoading: true
    };
    _this2.addProduct = _this2.addProduct.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(ProductList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "loadData",
    value: function () {
      var _loadData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var query, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = "\n            query {\n                productList {\n                    id\n                    name\n                    category\n                    price\n                    imageUrl\n                }\n            }\n        ";
                _context.next = 3;
                return graphQLFetch(query);

              case 3:
                data = _context.sent;

                if (data) {
                  this.setState({
                    products: data.productList,
                    initialLoading: false
                  });
                }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function loadData() {
        return _loadData.apply(this, arguments);
      }

      return loadData;
    }()
  }, {
    key: "addProduct",
    value: function () {
      var _addProduct = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(product) {
        var query, data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                query = "\n            mutation addProduct($product: ProductInputs!) {\n                addProduct(product: $product) {\n                    id\n                }\n            }\n        ";
                _context2.next = 3;
                return graphQLFetch(query, {
                  product: product
                });

              case 3:
                data = _context2.sent;

                if (data) {
                  this.loadData();
                }

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function addProduct(_x2) {
        return _addProduct.apply(this, arguments);
      }

      return addProduct;
    }()
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        className: "container"
      }, /*#__PURE__*/React.createElement("h2", null, "My Company Inventory"), /*#__PURE__*/React.createElement("div", null, "Showing all available products"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(ProductTable, {
        headings: productTableHeadings,
        products: this.state.products,
        loading: this.state.initialLoading
      }), /*#__PURE__*/React.createElement("div", null, "Add a new Product"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(ProductAdd, {
        addProduct: this.addProduct
      })));
    }
  }]);

  return ProductList;
}(React.Component);

var element = /*#__PURE__*/React.createElement(ProductList, null);
ReactDOM.render(element, document.getElementById('contents'));