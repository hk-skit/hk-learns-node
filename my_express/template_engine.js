const express = require('express');
const path = require('path');
const app = express();
const PORT = 8000;

const viewPath = path.normalize(__dirname, '/index.pug');

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render(viewPath, { title: 'Hello Pug!', message: 'Pug is awesome.' });
});

app.listen(PORT, () => console.log(`Listening at ${PORT}`));
