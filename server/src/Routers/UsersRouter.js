const express =  require('express');
const router = express.Router();

const usersModel = require('../Schemas/UsersSchema');

router.use(express.json());

router.post('/users',(req, res) => {
    // console.log("users")
});
module.exports = router;