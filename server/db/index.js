const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "aditya@98#*",
  host: "localhost",
  port:5432,
  database: "yelp"
});
module.exports = {
  query: (text, params) => pool.query(text, params),
};
