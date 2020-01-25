'use strict';

const express = require('express');
const indexRouter = require('./routes/index.route');
const productsRouter = require('./routes/products.route');
const ingredientsRouter = require('./routes/ingredients.route');

const app = express();

app.use(express.json());
app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use('/ingredients', ingredientsRouter);

const server = app.listen(9000, () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log('Daily Harvest service listening at http://%s:%s', host, port);
});
