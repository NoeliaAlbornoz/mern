const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    firstname: String,
    lastname: String,
    //googleID: String,
    //favorites: [{type: Schema.Types.ObjectId, ref: 'Favorites'}]
});

module.exports = mongoose.model('User', UserSchema);