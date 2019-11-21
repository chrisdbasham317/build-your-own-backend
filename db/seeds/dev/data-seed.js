const classes = require('../../../classes');

const tablesReset = (knex) => {
  const tableNames = ['classes', 'classes_saving_throws', 'saving_throws', 'classes_proficiencies', 'proficiencies']
  return tableNames.forEach(async (table) => {
    await knex(table).del();
  })
};

const createClass = (knex, classData) => {
  const { name, hit_die, proficiencies, saving_throws } = classData;
  return knex('classes').insert({
    name,
    hit_die
  }, 'id')
    .then(classID => {
      console.log(classID)
    })
}

const buildClassSavingThrowJoin = async (knex, savingThrows) => {
  
}

exports.seed = (knex) => {
  return knex('classes').del()
    .then(() => knex('classes_saving_throws').del())
    .then(() => knex('saving_throws').del())
    .then(() => knex('classes_proficiencies').del())
    .then(() => knex('proficiencies').del())
    .then(() => {
      let classPromises = [];
      classes.forEach(classData => {
        classPromises.push(createClass(knex, classData));
      })
      return Promise.all(classPromises);
    })
    .catch(error => console.error(`Error seeding data: ${error}`));
};
