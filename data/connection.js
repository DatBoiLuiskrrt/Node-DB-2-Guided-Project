const knex = require('knex');

const knexConfig = {
    client: 'sqlite3',// db driver
    connection: {
     // could be an object or a string
      filename: './data/produce.db3' 
    },
    useNullAsDefault: true // only needed for sqlite
  };

  //configured a connection to the database

module.exports = knex(knexConfig);

