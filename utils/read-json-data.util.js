'use strict';

const fs = require('fs');
const path = require('path');

const dataDirectory = path.normalize(`${__dirname}/../data`);

// Use this to serve JSON data as "Flyweight" objects
const dataLoaded = new Map();

module.exports = readJsonData;

function readJsonData(dataName) {
    const fileContent = getJsonData(dataName);
    return parseJsonFromFileContent(fileContent);
}

function getJsonData(dataName) {
    if (!dataLoaded.has(dataName)) {
        const data = readFromFile(dataName);
        dataLoaded.set(dataName, data);
    }
    return dataLoaded.get(dataName);
}

function readFromFile(dataName) {
    const file = `${dataDirectory}/${dataName}.json`;
    const bufferedData = fs.readFileSync(file);
    const fileContent = bufferedData.toString();
    return fileContent;
}

function parseJsonFromFileContent(fileContent) {
    let products;
    try {
        products = JSON.parse(fileContent);
    } catch (e) {
        throw new Error('readJsonData(): invalid, or malformed JSON string');
    }
    return products;
}
