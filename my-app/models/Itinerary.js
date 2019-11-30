'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItinerarySchema = Schema({
    title: {type: String},
    profilePic: {type: String},
    likes: {type: Number},
    price: {type: Number},
    duration: {type: Number},
    cityId: {type: String},
    city: {type: Schema.Types.ObjectId, ref: 'City'},
    activities: [{type: Schema.Types.ObjectId, ref: 'Activity'}]
});

module.exports = mongoose.model('MyItinerary', ItinerarySchema);
