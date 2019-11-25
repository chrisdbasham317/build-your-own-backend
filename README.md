# Build Your Own Backend (Dungeons and Dragons)


## Table of Contents
* [Synopsis](#Synopsis) 
* [Built With](#Built-With)
* [Endpoints](#Endpoints)
* [GET Requests](#GET-Requests)
* [POST Requests](#POST-Requests)
* [DELETE Requests](#DELETE-Request)

## Synopsis

Build Your Own Backend (BYOB) is a first attempt RESTful API, built as a solo project in one week. The requirement was to pick a data set/or build one, and follow RESTful architecture to successfully create a database. My BYOB data is based on Dungeons and Dragons 5th Edition. Utilizing my database, users can recieve information about DnD 5e classes and subclasses via GET requests. They can add data to my API via POST requests. Lastly, they can remove information from the API via DELETE requests.

**Harry Potter Backend** is a RESTful API built in a week. It provides data about the houses of Hogwarts School of Witchcraft and Wizardy and ten students from each house. Users can receive data through GET requests, add data to the API through POST requests, and delete data with DELETE requests.

## Built With
 - [X] Node.js
 - [X] Express
 - [X] Knex
 - [X] PostgreSQL
 - [X] Keroku

## Endpoints

### Classes
  - [x] https://dnd-byob.herokuapp.com/api/v1/classes
  - [x] https://dnd-byob.herokuapp.com/api/v1/classes/:id
  
### Subclasses
  - [x] https://dnd-byob.herokuapp.com/api/v1/subclasses
  - [x] https://dnd-byob.herokuapp.com/api/v1/subclasses/:id

## API Calls

### GET Requests

- A user can make a request to GET data on all classes
#### GET /api/v1/classes

#### Sample Response

```
[
    {
        "id": 88,
        "name": "Rogue",
        "hit_die": "8"
    },
    {
        "id": 89,
        "name": "Warlock",
        "hit_die": "8"
    },
    {
        "id": 90,
        "name": "Wizard",
        "hit_die": "6"
    },
    ...
]
```

- A user can make a request to GET data on all subclasses
#### GET /api/v1/subclasses

#### Sample Response

```
[
  {
        "id": 60,
        "name": "Land",
        "subclass_flavor": "Druid Circle",
        "description": "The Circle of the Land is made up of mystics and sages who safeguard ancient knowledge and rites through a vast oral tradition. These druids meet within sacred circles of trees or standing stones to whisper primal secrets in Druidic. The circle’s wisest members preside as the chief priests of communities that hold to the Old Faith and serve as advisors to the rulers of those folk. As a member of this circle, your magic is influenced by the land where you were initiated into the circle’s mysterious rites.",
        "class_id": 82,
        "created_at": "2019-11-21T17:30:43.430Z",
        "updated_at": "2019-11-21T17:30:43.430Z"
    },
    {
        "id": 62,
        "name": "Draconic",
        "subclass_flavor": "Sorcerous Origins",
        "description": "Your innate magic comes from draconic magic that was mingled with your blood or that of your    ancestors. Most often, sorcerers with this origin trace their descent back to a mighty sorcerer of ancient times who made a bargain with a dragon or who might even have claimed a dragon parent. Some of these bloodlines are well established in the world, but most are obscure. Any given sorcerer could be the first of a new bloodline, as a result of a pact or some other exceptional circumstance.",
        "class_id": 87,
        "created_at": "2019-11-21T17:30:43.432Z",
        "updated_at": "2019-11-21T17:30:43.432Z"
    },
    {
        "id": 67,
        "name": "Hunter",
        "subclass_flavor": "Ranger Archetype",
        "description": "Emulating the Hunter archetype means accepting your place as a bulwark between civilization and the terrors of the wilderness. As you walk the Hunter's path, you learn specialized techniques for fighting the threats you face, from rampaging ogres and hordes of orcs to towering giants and terrifying dragons.",
        "class_id": 86,
        "created_at": "2019-11-21T17:30:43.433Z",
        "updated_at": "2019-11-21T17:30:43.433Z"
    },
    ...
]
```

- A user can make a request to GET data on a particular class based on class id
#### GET /api/v1/classes/:id

#### Sample Response

```
{
  "id": 88,
  "name": "Rogue",
  "hit_die": "8"
}
```

- A user can make a request to GET data on a particular subclass based on id
#### GET /api/v1/subclasses/:id

#### Sample Response

```
    {
        "id": 62,
        "name": "Draconic",
        "subclass_flavor": "Sorcerous Origins",
        "description": "Your innate magic comes from draconic magic that was mingled with your blood or that of your    ancestors. Most often, sorcerers with this origin trace their descent back to a mighty sorcerer of ancient times who made a bargain with a dragon or who might even have claimed a dragon parent. Some of these bloodlines are well established in the world, but most are obscure. Any given sorcerer could be the first of a new bloodline, as a result of a pact or some other exceptional circumstance.",
        "class_id": 87,
        "created_at": "2019-11-21T17:30:43.432Z",
        "updated_at": "2019-11-21T17:30:43.432Z"
    }
```


### POST Requests

- A user can make a POST request to add a new class to the API
#### POST /api/v1/classes
- This endpoint requires {"name": string, "hit_die": string}

#### Sample Response

```
{
    "id": 104,
    "name": "NewClass",
    "hit_die": "10"
}
```

- A user can make a POST request to add a new subclass to the API
#### POST /api/v1/subclasses
- This endpoint requires {"name": string, "subclass_flavor": string, "description": string, "parent_class": string}

#### Sample Response

```
{
    "id": 82,
    "name": "NewSubClass",
    "subclass_flavor": "Knight",
    "description": "Description of new subclass"
}
```


### DELETE Request

#### DELETE /api/v1/classes/:id
- This endpoint requires an id be included at the end of the url
- This endpoint will return the new array without the deleted class
