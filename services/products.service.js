'use strict';

const readJsonData = require('../utils/read-json-data.util');

// Use this until we get DB service
const products = readJsonData('products');

class ProductsService {
    getProducts() {
        return products;
    }
}

module.exports = ProductsService;
