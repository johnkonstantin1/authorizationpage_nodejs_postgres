require("dotenv").config();

const { Pool } = require("pg");

const isProducting = process.env.NOODE_ENV === "production";

// const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;
const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;
// const pool = new Pool({
//   connectionString: isProducting ? process.env.DATABASE_URL : connectionString,
// });
// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });
const pool = new Pool({
  connectionString: isProducting ? process.env.DATABASE_URL : connectionString,
  ssl: isProducting ? { rejectUnauthorized: false } : false,
});

module.exports = { pool };

