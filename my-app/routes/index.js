'use strict'

const express = require('express');
const cityControllers = require('../controllers/City');
const itineraryControllers = require('../controllers/Itinerary');
const activityControllers = require('../controllers/Activity');
const userControllers = require ('../controllers/User');
const favoritesControllers = require ('../controllers/Favorite');
const commentControllers = require ('../controllers/Comment');
const api = express.Router();
const jwt = require("jsonwebtoken");
const key = require("../server");
const passport = require('../passport')
const User = require('../models/User');

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

api.post('/user', userControllers.saveUser);
api.get('/user/:userId', userControllers.getUser);
api.get('/users/all',  userControllers.getUsers);
api.put('/user/:userId', userControllers.updateUser);
api.delete('/user/:userId', userControllers.deleteUser);
api.post('/user/login', userControllers.loginUser);

api.get("/test", passport.authenticate("jwt", { session: false }), (req, res) => {
      User
        .findOne({ _id: req.user.id })
        .then(user => {
          res.json(user);
        })
        .catch(err => res.status(404).json({ error: "User does not exist!" }));
    }
  );

api.post('/favorite', favoritesControllers.saveFavorite);
api.get('/favorite/:favoriteId', favoritesControllers.getFavorite);
api.get('/favorites/all', favoritesControllers.getFavorites);
api.get('/favorites/:userId', favoritesControllers.getFavoritesByUser);
api.delete('/favorite/:favoriteId', favoritesControllers.deleteFavorites);

api.post('/comment', commentControllers.saveComment);
api.get('/comment/:commentId', commentControllers.getComment);
api.get('/comments/all', commentControllers.getComments);
api.get('/comments/:userId', commentControllers.getCommentsByUser);
api.delete('/comment/:commentId', commentControllers.deleteComment);

//Google auth login:
//api.get("/auth/google", passport.authenticate('google', // first param: strategy (passport knows it)
//{scope: ['profile']}, //second param: google info wanted
//{session: false }
//));
//google callback route (JWT)
//api.get("/auth/google/redirect", passport.authenticate('google',{ session: false }), userController.userRedirect); 

module.exports = api;