'use strict';

const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Daily Harvest service');
});

module.exports = router;
