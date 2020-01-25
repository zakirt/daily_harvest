'use strict';

const readJsonData = require('../utils/read-json-data.util');

// Use this until we get DB service
const ingredients = readJsonData('ingredients');

class IngredientsService {
    getIngredients() {
        return ingredients;
    }
}

module.exports = IngredientsService;
