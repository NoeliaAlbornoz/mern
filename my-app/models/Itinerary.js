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
    activities: [{type: Schema.Types.ObjectId, ref: 'Activity'}],
    favorite: {type: String},
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
});

module.exports = mongoose.model('MyItinerary', ItinerarySchema);
