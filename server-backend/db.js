// Import path module
const path = require('path')
const env = require("./env.json")
// Get the location of database.sqlite file
const PG_CONNECTION_STRING = env.server.PG_CONNECTION_STRING;

// Create connection to SQLite database
const knex = require('knex')({
  client: 'pg',
  connection: PG_CONNECTION_STRING,
  useNullAsDefault: true
});

  //
module.exports = knex