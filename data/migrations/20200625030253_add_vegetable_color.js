
exports.up = function(knex) {
  return knex.schema.table('vegetable', tbl => {
      tbl.string('color', 80);
  })
};

exports.down = function(knex) {
  return knex.schema.table('vegetable', tbl => {
      tbl.dropColumn('color');
  })
};

// This table creates a new row in our vegetable column
