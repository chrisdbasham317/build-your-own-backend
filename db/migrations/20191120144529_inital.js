exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('classes', table => {
      table.increments('id').primary();
      table.string('name');
      table.string('hit_die');
    }),

    
    knex.schema.createTable('subclasses', table => {
      table.increments('id').primary();
      table.string('name');
      table.string('subclass_flavor');
      table.string('description', 3000);
      table.integer('class_id').unsigned();
      table.foreign('class_id').references('classes.id');
      table.timestamps(true, true);
    })
    
    // knex.schema.createTable('classes_saving_throws', table => {
    //   table.increments('id').primary();
    //   table.integer('class_id').references('classes.id');
    //   table.integer('ST_id').references('saving_throws.id');
    // }),

    // knex.schema.createTable('saving_throws', table => {
    //   table.increments('id').primary();
    //   table.string('name');
    //   table.string('abbreviation');
    // }),

    // knex.schema.createTable('classes_proficiencies', table => {
    //   table.increments('id').primary();
    //   table.integer('class_id').references('classes.id');
    //   table.integer('proficiency_id').references('proficiencies.id');
    // }),

    // knex.schema.createTable('proficiencies', table => {
    //   table.increments('id').primary();
    //   table.string('name');
    //   table.string('example');
    // }),
  ])  
};

exports.down = knex => {
  return Promise.all([
    knex.schema.dropTable('subclasses'),
    knex.schema.dropTable('classes'),
  ])
};
