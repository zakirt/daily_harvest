'use strict';

jest.mock('fs');
const fsMock = require('fs');
const readJsonData = require('../utils/read-json-data.util');

describe('readJsonData', () => {
    let jsonData;

    beforeEach(() => {
        jsonData = {
            data: 'abc'
        };
        fsMock.readFileSync = jest.fn(() => ({
            toString() {
                return JSON.stringify(jsonData);
            }
        }));
    });

    it('should be defined', () => {
        expect(typeof readJsonData).toBe('function');
    });

    it('should call fs.readFileSync with specified data name', () => {
        const dataName = 'mydata';
        readJsonData(dataName);
        expect(fsMock.readFileSync).toHaveBeenCalledTimes(1);
        expect(fsMock.readFileSync.mock.calls[0][0]).toMatch(/.+mydata.json$/);
    });

    it('should throw error if malformed JSON encountered', () => {
        jsonData = undefined;
        const dataName = 'my';
        expect(() => readJsonData(dataName)).toThrow('readJsonData(): invalid, or malformed JSON string');
    });
});
