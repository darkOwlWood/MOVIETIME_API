const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 8089;

app.use(bodyParser.json());

app.get('/greet', (req, res, next) => {
    const { body } = req;
    console.log(body);

    res.json({ backGreet: 'Hello world JS' });
})

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));