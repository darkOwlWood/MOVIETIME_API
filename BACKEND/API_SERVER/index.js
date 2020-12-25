const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const { config } = require('./config');
const { notFoundHandler } = require('./utils/middlewares/notFoundHandler');
const { logErrors, wrapErrors, errorHandler } = require('./utils/middlewares/errorHandler');

//MIDDLEWARES TO PREPARE THE REQUEST
app.use(cors());
app.use(bodyParser.json());

//APP ROUTES

//NOT FOUND ROUTE
app.use(notFoundHandler);

//ERROR HANDLERS
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, () => console.log(`http://localhost:${config.port}`));