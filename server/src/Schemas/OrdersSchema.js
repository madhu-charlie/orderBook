const mongoose = require('mongoose');
let ordersSchema = new mongoose.Schema({
});

let ordersModel = mongoose.model('orders', ordersSchema);