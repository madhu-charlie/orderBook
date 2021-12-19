const mongoose = require('mongoose');
let usersSchema = new mongoose.Schema({
});

let UsersModel = mongoose.model('users', usersSchema);