# Daily Harvest Node service

## Requirements

* MAC OSX
* Node 12+
* NPM 6.13.4+

## Setup

* Download the app
* Run `npm i` to install the dependencies

## Running the app

Use the following command to launch the server on `localhost`'s port `9000`

```
node app.js
```

## Public end points

#### All products

```
/products
```

#### Products by ingredient ID

##### Ex. all products with Organic Banana (ingedientID 3) as one of the ingredients

```
/products?ingredientId=3
```

#### All ingredients

```
/ingredients
```

## Unit tests

The app is using [jest](https://jestjs.io/) for unit testing.

To test all files once run

```
npm test
```

To test all files in TDD mode (watch for file changes) run

```
npm run test:tdd
```

You can also target specific files.
Ex.

```
npm run test products.service
npm run test:tdd products.service
```