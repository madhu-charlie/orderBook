const mongoose = require('mongoose');
let dashboardSchema = new mongoose.Schema({
    id: {
        type: String,
        unique: true
    },
    username: String,
    password: String,
    email : String,
    isStudent : Boolean,
    contact: String,
    address: String
});

let DashboardModel = mongoose.model('dashboard', dashboardSchema);