'use strict';

const readJsonData = require('../utils/read-json-data.util');

class IngredientsService {
    constructor() {
        // Use this until we get DB service
        this.ingredients = readJsonData('ingredients');
    }

    getIngredients() {
        return this.ingredients;
    }
}

module.exports = IngredientsService;
