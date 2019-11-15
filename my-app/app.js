'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const concurrently = require('concurrently');
const app = express();
const api = require('./routes');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/api', api);

/*

app.get('/api/hello', (req, res) => {
    res.status(200).send({ express: 'Hello From Express' });
});

app.get('/api/:name', (req, res) => {
  res.status(200).send({ express: `Hello From Express ${req.params.name}` });
});

app.post('/api/demo', (req, res) => {
  console.log(req.body);
  res.status(200).send(
  `I received your POST request.`,
  );
});

*/

module.exports = app;