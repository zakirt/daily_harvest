'use strict';

const express = require('express');
const IngredientsService = require('../services/ingredients.service');

const router = express.Router();
const productsService = new IngredientsService();

router.get('/', (req, res) => {
    const ingredients = productsService.getIngredients();
    res.json(ingredients);
});

module.exports = router;
