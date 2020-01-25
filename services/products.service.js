'use strict';

const readJsonData = require('../utils/read-json-data.util');

class ProductsService {
    constructor() {
        // Use this until we get DB service
        const data = readJsonData('products');
        this.products = data.products;
    }

    getProducts() {
        return this.products;
    }

    getProductsByIngredientId(ingredientId) {
        throwIfInvalidIngredientId(ingredientId);
        throwIfJsonIsInvalid(this.products);
        const products = this.products.filter((prod) => prod.ingredient_ids.includes(ingredientId));
        return products;
    }
}

function throwIfInvalidIngredientId(ingredientId) {
    if (typeof ingredientId !== 'number' || Number.isNaN(ingredientId)) {
        throw new TypeError('ProductsService.getProductsByIngredientId(): ingredientId must be a valid number');
    }
}

function throwIfJsonIsInvalid(products) {
    throwIfProductsIsInvalid(products);
    throwIfIngredientIdsInvalid(products);
}

function throwIfProductsIsInvalid(products) {
    if (!Array.isArray(products)) {
        throw new Error('ProductsService: products property must be a valid array');
    }
}

function throwIfIngredientIdsInvalid(products) {
    if (!Array.isArray(products[0].ingredient_ids)) {
        throw new Error('ProductsService: ingredient_ids must be a valid array');
    }
}

module.exports = ProductsService;
