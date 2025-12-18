const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();

const siteRouter = require('./routes/siteRoutes');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views/pages'));

app.locals.basedir = path.join(__dirname, 'views/pages');

app.use(express.static(path.join(__dirname, 'public')));

app.use(siteRouter);

app.listen(PORT);