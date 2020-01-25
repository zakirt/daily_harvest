'use strict';

jest.mock('../utils/read-json-data.util');
const readJsonData = require('../utils/read-json-data.util');
const ProductsService = require('../services/products.service');

describe('ProductsService', () => {
    let productsService;
    let jsonData;

    beforeEach(() => {
        jsonData = {
            products: [
                {
                    id: 1,
                    ingredient_ids: [3, 12, 8]
                },
                {
                    id: 2,
                    ingredient_ids: [3, 7, 17]
                },
                {
                    id: 3,
                    ingredient_ids: [1, 2, 4]
                }
            ]
        };
        readJsonData.mockImplementation(() => jsonData);
        productsService = new ProductsService();
    });

    it('should be defined', () => {
        expect(typeof ProductsService).toBe('function');
    });

    it('should have getProducts and getProductsByIngredientId methods', () => {
        expect(typeof productsService.getProducts).toBe('function');
        expect(typeof productsService.getProductsByIngredientId).toBe('function');
    });

    it('should throw error if product property is not a valid array', () => {
        jsonData.products = null;
        productsService = new ProductsService();
        expect(() => productsService.getProductsByIngredientId(3)).toThrow('ProductsService: products property must be a valid array');
    });

    it('should throw error if ingredient_ids property is not a valid array', () => {
        jsonData.products = [{}];
        productsService = new ProductsService();
        expect(() => productsService.getProductsByIngredientId(3)).toThrow('ProductsService: ingredient_ids must be a valid array');
    });

    it('should throw if ingredientId is not a valid number', () => {
        const input = [undefined, null, '55'];
        input.forEach((id) => {
            expect(() => productsService.getProductsByIngredientId(id))
                .toThrowError(new TypeError('ProductsService.getProductsByIngredientId(): ingredientId must be a valid number'));
        });
    });

    it('getProductsByIngredientId should return all products containing specified ingredient ID', () => {
        const products = productsService.getProductsByIngredientId(3);
        expect(products.length).toBe(2);
    });
});
