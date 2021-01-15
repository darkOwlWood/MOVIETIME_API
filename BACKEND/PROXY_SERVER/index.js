const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const { config } = require('./config');

const { authServer } = require('./routes/AuthServerRoute');
const { apiServerRoute } = require('./routes/ApiServerRoute');
const { notFoundHandler } = require('./utils/middlewares/notFoundHandler');
const { logError, wrapError, responceError } = require('./utils/middlewares/errorHandler');

//MIDDLEWARES TO PREPARE THE REQUEST
app.use(express.json());
app.use(cookieParser(config.cookie_secret));

//APP ROUTES
authServer(app);
apiServerRoute(app);

//NOT FOUND HANDLER
app.use(notFoundHandler);

//ERROR HANDLERS
app.use(logError);
app.use(wrapError);
app.use(responceError);

app.listen(config.port, () => console.log(`http://localhost:${config.port}`));