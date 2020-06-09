'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = Schema({
    text: String,
    itineraryId: {type: Schema.Types.ObjectId, ref: 'Itinerary'},
    userId: {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Comment', CommentSchema);