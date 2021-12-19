const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://madhu:gCmT7YAZKYQg1jx4@dbs.umdma.mongodb.net/test',
    err => {
        if(err) throw err;
        console.log('connected to MongoDB')
    });
