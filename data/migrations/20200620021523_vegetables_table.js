
// up describes the changes that will be applied to the database
exports.up = function(knex) {
  // we want to create a vegetables table
  return knex.schema.createTable('vegetables', tbl => { // remember to return
    // needs a primary key, named id, type integer, autoincrement
    tbl.increments();// this method autoincrements the id number
    tbl
    .string('name', 255)
    .unique()
    .index();
    //up to 255 characters long, unique is a constraint so it cannot be repeated so database will give you an error if you type the same name when adding new values.
    tbl.boolean('favorite'); 
  });
};

// down describes how to undo the changes from the up function
exports.down = function(knex) {
  // we want to delete(drop) the vegetables table
  return knex.schema.dropTableIfExists('vegetables');
};
