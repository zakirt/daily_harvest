# Daily Harvest Node service

## Requirements

* MAC OSX
* Node 12+
* NPM 6.13.4+

## Setup

* Download the app
* Run `npm i` to install the dependencies

## Running the app

Use the following command to launch the server on port `9000`

```
node app.js
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

At Daily Harvest, we want to make it as easy as possible for our customers to get healthy food that they enjoy. One way to do this is to allow people to search for products that contain a favorite ingredient (apples, kale, cinnamon, etc.).

We have provided two files that define products and ingredients in JSON format:

* products.json
* ingredients.json

In a language of your choice (python and javascript preferred, but any modern language that will run under OSX or Linux will be accepted), please write a program that returns all of the products (defined in products.json) that contain the ingredient “Organic Banana” (defined in ingredients.json). With your solution, please include any instructions for configuring and running your program.

Notes
* Do not modify the ​json​ files
* Keep your code as clean and readable as possible.
* Bonus points for organization and documentation.
* Bonus points for tests.