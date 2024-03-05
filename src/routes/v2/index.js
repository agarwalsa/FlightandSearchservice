const express = require('express');
const FlightController = require('../../controllers/flight-controller');
const router = express.Router();
router.post('/flight',FlightController.create);
module.exports=router;