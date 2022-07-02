const { Router } = require('express');
const express = require('express');
const router = express.Router();

const tripsController = require('../controllers/trips');

router
    .route('/trips')
    .get(tripsController.tripsList);

router
    .route('/trips/:tripsCode')
    .get(tripsController.tripsFindByCode);

module.exports = router;