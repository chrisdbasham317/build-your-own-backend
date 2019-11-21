const express = require('express');
const app = express();

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.set('port', process.env.PORT || 3000);
app.locals.title = 'DND Class Info';

app.get('api/v1/classes', (request, response) => {
  database('classes').select()
    .then((()))
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on localhost:${app.get('port')}`)
})