const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    firstname: String,
    lastname: String
});

module.exports = mongoose.model('User', UserSchema);