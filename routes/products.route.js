'use strict';

const express = require('express');
const ProductsService = require('../services/products.service');

const router = express.Router();
const productsService = new ProductsService();

router.get('/', (req, res) => {
    const products = productsService.getProducts();
    res.json(products);
});

module.exports = router;
