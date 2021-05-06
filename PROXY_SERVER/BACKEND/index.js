const path = require('path');
const cors = require('cors');
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const { config } = require('./config');
const { proxyRouter } = require('./proxy/proxyRouter');

app.use(cors());
app.use(express.json());
app.use(cookieParser(config.cookieSecret));
app.use(express.static(path.resolve(__dirname, 'public')));

proxyRouter(app);
app.use((req, res, next) => res.status(404).send());

app.listen(config.port, () => console.log(`http://localhost:${config.port}/`));