'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cityControllers = require('../controllers/City');
const itineraryControllers = require('../controllers/Itinerary');
const activityControllers = require('../controllers/Activity');
const api = express.Router();

api.post('/city', cityControllers.saveCity);
api.get('/city/:cityId', cityControllers.getCity);
api.get('/cities/all', cityControllers.getCities);
api.put('/city/:cityId', cityControllers.updateCity);
api.delete('/city/:cityId', cityControllers.deleteCity);

api.post('/itinerary', itineraryControllers.saveItinerary);
api.get('/itinerary/:itineraryId', itineraryControllers.getItinerary);
api.get('/itineraries/all', itineraryControllers.getItineraries);
api.get('/itineraries/:cityId', itineraryControllers.getItinerariesByCity);
api.put('/itinerary/:itineraryId', itineraryControllers.updateItinerary);
api.delete('/itinerary/:itineraryId', itineraryControllers.deleteItinerary);

api.post('/activity', activityControllers.saveActivity);
api.get('/activity/:activityId', activityControllers.getActivity);
api.get('/activities/all', activityControllers.getActivities);
api.get('/activities/:itineraryId', activityControllers.getActivitiesByItinerary);
api.put('/activity/:activityId', activityControllers.updateActivity);
api.delete('/activity/:activityId', activityControllers.deleteActivity);

module.exports = api;