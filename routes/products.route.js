'use strict';

const express = require('express');
const url = require('url');
const queryString = require('querystring');
const ProductsService = require('../services/products.service');

const router = express.Router();
const productsService = new ProductsService();

router.get('/', (req, res) => {
    const urlParts = url.parse(req.url);
    const query = urlParts.query;
    const products = getProducts(query);
    res.json(products);
});

function getProducts(query) {
    if (query) {
        const parsedQuery = queryString.parse(query);
        if (parsedQuery.ingredientId) {
            return getProductsByIngredientId(parsedQuery.ingredientId);
        }
    }
    return productsService.getProducts();
}

function getProductsByIngredientId(ingredientId) {
    let products;
    try {
        products = productsService.getProductsByIngredientId(+ingredientId);
    } catch (e) {
        console.error(e.message);
    }
    return products;
}

module.exports = router;
