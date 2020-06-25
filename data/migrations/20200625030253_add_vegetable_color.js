
exports.up = function(knex) {
  return knex.schema.table('vegetable', tbl => {
      tbl.string('color', 80);
  })
};

exports.down = function(knex) {
  
};
