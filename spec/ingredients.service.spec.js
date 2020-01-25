'use strict';

jest.mock('../utils/read-json-data.util');
const IngredientsService = require('../services/ingredients.service');

describe('ProductsService', () => {
    let ingredientsService;

    beforeEach(() => {
        ingredientsService = new IngredientsService();
    });

    it('should be defined', () => {
        expect(typeof IngredientsService).toBe('function');
    });

    it('should have getProducts method', () => {
        expect(typeof ingredientsService.getIngredients).toBe('function');
    });
});
