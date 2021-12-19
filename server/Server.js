require('./src/DB');
const cors = require('cors')
const express = require('express');
const app = express();

const dashboardRoute = require('./src/Routers/DashboardRouter');

const categoryRoute = require('./src/Routers/CategoryRouter');

const ordersRoute = require('./src/Routers/OrdersRouter');
const usersRoute = require('./src/Routers/UsersRouter');



app.use(cors())
app.use(usersRoute);
app.use(ordersRoute);
app.use(dashboardRoute);

app.use(categoryRoute);


//PORT which listens
app.listen(3001);