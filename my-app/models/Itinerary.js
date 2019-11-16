'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItinerarySchema = Schema({
    title: {
        type: String
    },
    profilePic: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    duration: {
        type: String
    },
    cityId: {
        type: String
    }
});

module.exports = mongoose.model('MyItinerary', ItinerarySchema);
