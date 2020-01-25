'use strict';

jest.mock('../utils/read-json-data.util');
const readJsonData = require('../utils/read-json-data.util');
const IngredientsService = require('../services/ingredients.service');

describe('ProductsService', () => {
    let ingredientsService;
    let jsonData;

    beforeEach(() => {
        jsonData = {
            ingredients: [
                {
                    id: 1,
                    name: 'Cherry'
                },
                {
                    id: 2,
                    name: 'Banana'
                },
                {
                    id: 3,
                    name: 'Apples'
                }
            ]
        };
        readJsonData.mockImplementation(() => jsonData);
        ingredientsService = new IngredientsService();
    });

    it('should be defined', () => {
        expect(typeof IngredientsService).toBe('function');
    });

    it('should have getProducts method', () => {
        expect(typeof ingredientsService.getIngredients).toBe('function');
    });
});
