
// up describes the changes that will be applied to the database
exports.up = function(knex) {
  // we want to create a vegetables table
  return knex.schema.createTable('vegetables', tbl => {
    // needs a primary key, named id, type integer, autoincrement
    tbl.increments();// this method autoincrements the id number
    tbl.string();
  })
};

// down describes how to undo the changes from the up function
exports.down = function(knex) {
  // we want to delete(drop) the vegetables table
};
