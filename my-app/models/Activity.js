'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ActivitySchema = Schema({
    title: String,
    img: String,
    itineraryId: String
});

module.exports = mongoose.model('Activity', ActivitySchema);