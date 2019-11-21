const classes = require('../../../classes');
const subclasses = require('../../../subclasses');

const createClass = (knex, classData) => {
  const { name, hit_die, sub_class } = classData;
  return knex('classes').insert({
    name,
    hit_die
  }, 'id')
    .then(classID => {
      let subclassPromises = [];
      const foundSubclass = subclasses.find(elem => elem.name === sub_class)
      subclassPromises.push(createSubclass(knex, {
        name: foundSubclass.name,
        subclass_flavor: foundSubclass.subclass_flavor,
        description: foundSubclass.desc,
        class_id: classID[0]
      }))
      return Promise.all(subclassPromises)
    })
}

const createSubclass = (knex, subclass) => {
  return knex('subclasses').insert(subclass);
};

exports.seed = (knex) => {
  return knex('subclasses').del()
    .then(() => knex('classes').del())
    .then(() => {
      let classPromises = [];
      classes.forEach(classData => {
        classPromises.push(createClass(knex, classData));
      })
      return Promise.all(classPromises);
    })
    .catch(error => console.error(`Error seeding data: ${error}`));
};
