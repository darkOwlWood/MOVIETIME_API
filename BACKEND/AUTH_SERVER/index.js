const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const { config } = require('./config');
const { notFoundHandler } = require('./utils/middlewares/notFoundHandler');
const { wrapError, logError, errorHandler } = require('./utils/middlewares/errorHandler');

//PARSERS
app.use(cors());
app.use(bodyParser.json());

//NOT FOUND
app.use(notFoundHandler);

//ERROR HANDLERS
app.use(logError);
app.use(wrapError);
app.use(errorHandler);

app.listen(config.port, () => console.log(`http://localhost:${config.port}`));