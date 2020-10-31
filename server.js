const express = require('express');

const bodyParser = require('body-parser');
const compression = require('compression');
const db = require('./model/db');
const path = require('path');
const { I18n } = require('i18n');

const i18n = new I18n({
  locales: ['en', 'de'],
  directory: path.join(__dirname, 'locales')
})

const app = express();
const port = 3000;
const api = require('./route/api');

app.use(i18n.init)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(compression());
app.use(express.static('public'));
app.use('/api', api);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('pages/index', { title: "Home :: MyDLs", path: req.path });
});

app.get('/join', (req, res) => {
  res.render('pages/index', { title: "Join :: MyDLs", path: req.path});
});

app.get('/create', (req, res) => {
  res.render('pages/index', { title: "Create :: MyDLs", path: req.path});
});

app.get('/lists', (req, res) => {
  res.render('pages/index', { title: "Public Lists :: MyDLs", path: req.path});
});

app.use(function (err, req, res, next) {
  res.render('pages/error', { error: err });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
