const express = require('express');
//Imports express into our file
const app = express();
//Assigns "app" the value of the invocation of express. This allows us to call the built in methods express gives us via dot notation on "app".

app.use(express.json());
//This parses the body of our requests by default

const environment = process.env.NODE_ENV || 'development';
// This allows us to set the environment as either a production environment dynamically, or a development one
const configuration = require('./knexfile')[environment];
//This line imports our config settings from our knexfile
const database = require('knex')(configuration);
//Connects us to the db via knex

app.set('port', process.env.PORT || 3000);
//Dynamically sets the port
app.locals.title = 'DND Class Info';
//Sets the value of this global variable

//Start classes endpoints
app.get('/api/v1/classes', (request, response) => {
  //describes the VERB and endpoint
  database('classes').select()
    //selects the table 'classes' in the database
    .then(classes => {
      response.status(200).json(classes);
      //sets the response status code and tells the server to send back a json'ed version of the 'classes' table
    })
    .catch(error => {
      response.status(500).json({ error: 'Unable to retrieve classes' });
      //sets the response status code and the error object if the request "goes bad"
    });
});

app.get('/api/v1/classes/:id', (request, response) => {
  //describes the VERB and endpoint
  database('classes').where('id', request.params.id).select()
    //Queries the database table "classes", and selects the row where the id of that element is equal to the id that is passed via request parameters
    .then(classes => {
      if (classes.length) {
        //Checks to see if an element was selected
        response.status(200).json(classes);
        //sets the response status code and tells the server to send back a json'ed version of the selected row from the classes table
        //
      } else {
        response.status(404).json({ error: `No class with ID: ${request.params.id} exists` });
      //sets the response status code and the error object if the request "goes bad"

      };
    });
});

app.post('/api/v1/classes', (request, response) => {
  //describes the VERB and endpoint
  const newClass = request.body;
  //Assigns the value of the body of the request to a variable
  for (let requiredParameter of ['name', 'hit_die']) {
    //sets the required parameters
    if (!newClass[requiredParameter]) {
      //sets the conditional to check for a missing parameter
      return response.status(422).send({
        error: `Required format is: { name: <string>, hit_die: <string> } ${requiredParameter} missing from request`
        //sets the response status code and the error object
      });
    }
  }
  database('classes').insert(newClass, 'id')
    //inserts the newClass into the classes table, and tells it to give it an id
    .then(newClassId => {
      const { name, hit_die } = newClass;
      //deconstructs the newClass object
      response.status(201).json({ id: newClassId[0], name, hit_die })
      //sets the response status code and sends back the newly built class object to include the database created id
    })
})

app.delete('/api/v1/classes/:id', (request, response) => {
  //describes the VERB and endpoint
  const id = request.params.id;
  //assigns the const id the value of the id passed as params
  database('classes').where('id', id).del()
    //locates the row in the classes table were the passed id matches column id
    .then(() => database('classes').select())
    //selects the classes table
    .then(classes => {
      response.status(202).json(classes);
      //sets the response status code and sends back the modified classes array
    })
    .catch(error => {
      response.status(404).send({ error: `Class with ID: ${id} not found` });
        //sets the response status code and the error object
    });
});
//End classes endpoints

//Start subclasses endpoints
app.get('/api/v1/subclasses', (request, response) => {
  //describes the VERB and endpoint
  database('subclasses').select()
    //selects the subclasses table
    .then((subclasses) => {
      response.status(200).json(subclasses);
      //sets the status code and sends the json'd subclasses data
    })
    .catch(error => {
      response.status(500).json({
        error: 'Unable to retrieve subclasses'
      });
      //sets the response status code and the error object

    });
});

app.get('/api/v1/subclasses/:id', (request, response) => {
  //describes the VERB and endpoint
  database('subclasses').where('id', request.params.id).select()
    //Goes into the subclasses table and locates where the passed id is equal to the column id, and selects that row
    .then(subclasses => {
      if (subclasses.length) {
        //Conditional checks to see if a row was selected
        response.status(200).json(subclasses)
        //sets the response status code and sends back the json'd subclass that was selected
      } else {
        response.status(404).json({ error: `No subclass with ID: ${request.params.id} exists` });
        //sets the response status code and the error object
      };
    });
});

app.post('/api/v1/subclasses', (request, response) => {
  //describes the VERB and endpoint
  const subclass = request.body;
  //assigns the constant subclass the value of the request body
  for (let requiredParameter of ['name', 'subclass_flavor', 'description', 'parent_class']) {
    //denotes what the request body must include as parameters
    if (!subclass[requiredParameter]) {
      //conditional checks to see if there were any missing parameters
      response.status(422).send({ error: `Required format is: { name: <string>, subclass_flavor: <string>, description: <string> } ${requiredParameter} missing from request` });
      //sets the status code and the error object
    }
  }
  database('classes').where('name', subclass.parent_class).select()
    //goes into the classes table, finds the row in which the name column matches the value of the passed in object's parent_class key
    .then(parentClass => {
      const { name, subclass_flavor, description } = subclass;
      //deconstructs the const subclass
      database('subclasses').insert({ name, subclass_flavor, description, class_id: parentClass[0].id }, 'id')
        //goes into the subclasses table, and inserts the new subclass to include the parent class id as the foreign key; as well as, the database generated subclass primary key of id
        .then(newId => {
          const { name, subclass_flavor, description } = subclass;
          //deconstructs the const subclass
          response.status(201).json({ id: newId[0], name, subclass_flavor, description });
          //sets the response status code and sends back the successfully created subclass to include it's primary key, name, flavor, and description
        });
    });
});
//End subclasses endpoints

app.listen(app.get('port'), () => {
  //tells the app to listen for which ever port the app is currently running on
  console.log(`${app.locals.title} is running on localhost:${app.get('port')}`);
  //logs that the app is running
});