const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const { config } = require('./config');

const { authServer } = require('./routes/AuthServerRoute');
const { apiServerRoute } = require('./routes/ApiServerRoute');

//MIDDLEWARES TO PREPARE THE REQUEST
app.use(express.json());
app.use(cookieParser(config.cookie_secret));

//APP ROUTES
authServer(app);
apiServerRoute(app);

app.listen(config.port, () => console.log(`http://localhost:${config.port}`));