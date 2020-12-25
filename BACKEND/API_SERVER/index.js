const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const { config } = require('./config');

//MIDDLEWARES TO PREPARE THE REQUEST
app.use(cors());
app.use(bodyParser.json());

//APP ROUTES

//NOT FOUND ROUTE

app.listen(config.port, () => console.log(`http://localhost:${config.port}`));