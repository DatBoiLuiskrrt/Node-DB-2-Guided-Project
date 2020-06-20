const knex = require('knex');

const knexfile = require('../knexfile');

const knexConfig = knexfile.development;

  //configured a connection to the database

module.exports = knex(knexConfig);

