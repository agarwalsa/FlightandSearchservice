const express = require('express');
const FlightController = require('../../controllers/flight-controller');
const{FlightMiddlewares} = require('../../middlewares/index');
const router = express.Router();
router.post('/flight',FlightMiddlewares.validateCreateFlight,FlightController.create);
router.get('/flight',FlightController.getAll);
module.exports=router;