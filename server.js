const express = require('express');
const app = express();

app.use(express.json());

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.set('port', process.env.PORT || 3000);
app.locals.title = 'DND Class Info';


//Start classes endpoints
app.get('/api/v1/classes', (request, response) => {
  database('classes').select()
    .then(classes => {
      response.status(200).json(classes);
    })
    .catch(error => {
      response.status(500).json({ error: 'Unable to retrieve classes' });
    });
});

app.get('/api/v1/classes/:id', (request, response) => {
  database('classes').where('id', request.params.id).select()
    .then(classes => {
      if (classes.length) {
        response.status(200).json(classes);
      } else {
        response.status(404).json({ error: `No class with ID: ${request.params.id} exists` });
      };
    });
});

app.post('/api/v1/classes', (request, response) => {
  const newClass = request.body;

  for (let requiredParameter of ['name', 'hit_die']) {
    if (!newClass[requiredParameter]) {
      return response.status(422).send({
        error: `Required format is: { name: <string>, hit_die: <string> } ${requiredParameter} missing from request`
      });
    }
  }
  database('classes').insert(newClass, 'id')
    .then(newClassId => {
      const { name, hit_die } = newClass;
      response.status(201).json({id: newClassId[0], name, hit_die} )
    })
})
//End classes endpoints

//Start subclasses endpoints
app.get('/api/v1/subclasses', (request, response) => {
  database('subclasses').select()
    .then((subclasses) => {
      response.status(200).json(subclasses);
    })
    .catch(error => {
      response.status(500).json({
        error: 'Unable to retrieve subclasses'
      });
    });
});

app.get('/api/v1/subclasses/:id', (request, response) => {
  database('subclasses').where('id', request.params.id).select()
    .then(subclasses => {
      if (subclasses.length) {
        response.status(200).json(subclasses)
      } else {
        response.status(404).json({ error: `No subclass with ID: ${request.params.id} exists` });
      };
    });
});
//End subclasses endpoints

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on localhost:${app.get('port')}`);
});