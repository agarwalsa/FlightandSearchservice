const express = require('express');
const CityController = require('../../controllers/city-controller');
const AirportController = require('../../controllers/airport-controller');
const router = express.Router();
router.post('/city',CityController.create);
router.post('/cities',CityController.createCities);
router.delete('/city/:id',CityController.destroy);
router.get('/city/:id',CityController.get);
router.get('/airports/:id',CityController.getAirports);
router.get('/city',CityController.getAll);
router.patch('/city/:id',CityController.update);
router.post('/airports',AirportController.create);
module.exports=router;