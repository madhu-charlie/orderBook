const express =  require('express');
const router = express.Router();

const dashboardModel = require('../Schemas/DashboardSchema');

router.use(express.json());

router.post('/dashboard',(req, res) => {
    // console.log("dashboard")
});
module.exports = router;