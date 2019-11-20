exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('classes', table => {
      table.increments('id').primary();
      table.string('name');
      table.string('hit_die');
    }),

    knex.schema.createTable('classes_saving_throws', table => {
      table.increments('id').primary();
      table.integer('class_id').references('classes.id');
      table.integer('ST_id').references('saving_throws.id');
    }),

    knex.schema.createTable('saving_throws', table => {
      table.increments('id').primary();
      table.string('name');
      table.string('abbreviation');
    }),

    knex.schema.createTable('classes_proficiencies', table => {
      table.increments('id').primary();
      table.integer('class_id').references('classes.id');
      table.integer('proficiency_id').references('proficiencies.id');
    }),

    knex.schema.createTable('proficiencies', table => {
      table.increments('id').primary();
      table.string('name');
      table.string('example');
    }),
  ])  
};

exports.down = knex => {
  return Promise.all([
    knex.schema.dropTable('classes_saving_throws'),
    knex.schema.dropTable('classes_proficiencies'),
    knex.schema.dropTable('proficiencies'),
    knex.schema.dropTable('saving_throws'),
    knex.schema.dropTable('classes')
  ])
};
