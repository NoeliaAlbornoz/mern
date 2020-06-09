'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FavoriteSchema = Schema({
    itineraryId: {type: Schema.Types.ObjectId, ref: 'Itinerary'},
    userId: {type: Schema.Types.ObjectId, ref: 'User'},
    liked: false
});

module.exports = mongoose.model('Favorite', FavoriteSchema);