'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cityControllers = require('../controllers/City');
const itineraryControllers = require('../controllers/Itinerary');
const api = express.Router();

api.post('/city', cityControllers.saveCity);
api.get('/city/:cityId', cityControllers.getCity);
api.get('/cities/all', cityControllers.getCities);
api.put('/city/:cityId', cityControllers.updateCity);
api.delete('/city/:cityId', cityControllers.deleteCity);

module.exports = api;