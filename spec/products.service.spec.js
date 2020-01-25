'use strict';

jest.mock('../utils/read-json-data.util');
const ProductsService = require('../services/products.service');

describe('ProductsService', () => {
    let productsService;

    beforeEach(() => {
        productsService = new ProductsService();
    });

    it('should be defined', () => {
        expect(typeof ProductsService).toBe('function');
    });

    it('should have getProducts method', () => {
        expect(typeof productsService.getProducts).toBe('function');
    });
});
