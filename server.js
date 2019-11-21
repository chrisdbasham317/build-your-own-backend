const express = require('express');
const app = express();

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.set('port', process.env.PORT || 3000);
app.locals.title = 'DND Class Info';

app.get('/api/v1/classes', (request, response) => {
  database('classes').select()
    .then((classes) => {
      response.status(200).json(classes)
    })
    .catch(error => {
      response.status(500).json({ error: 'Unable to retrieve classes' });
    });
});

app.get('/api/v1/subclasses', (request, response) => {
  database('subclasses').select()
    .then((subclasses) => {
      response.status(200).json(subclasses)
    })
    .catch(error => {
      response.status(500).json({
        error: 'Unable to retrieve subclasses'
      });
    });
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on localhost:${app.get('port')}`)
})