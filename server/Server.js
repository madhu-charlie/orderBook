require('./src/DB');
const cors = require('cors')
const express = require('express');
const app = express();

const categoryRoute = require('./src/Routers/CategoryRouter');


app.use(cors());

app.use(categoryRoute);


//PORT which listens
app.listen(3001);