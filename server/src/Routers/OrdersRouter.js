const express =  require('express');
const router = express.Router();

const ordersModel = require('../Schemas/OrdersSchema');

router.use(express.json());

router.post('/orders',(req, res) => {
    // console.log("orders")
});
module.exports = router;