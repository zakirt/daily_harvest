'use strict';

const fs = require('fs');
const path = require('path');

const dataDirectory = path.normalize(`${__dirname}/../data`);

function readJsonFile(dataName) {
    const file = `${dataDirectory}/${dataName}.json`;
    const bufferedData = fs.readFileSync(file);
    const fileContent = bufferedData.toString();
    let products;
    try {
        products = JSON.parse(fileContent);
    } catch (e) {
        throw new Error('readJsonData(): invalid, or malformed JSON string');
    }
    return products;
}

module.exports = readJsonFile;
