const Sequelize = require("sequelize");
const pkg = require("../../package.json");

const databaseName =
  pkg.name + (process.env.NODE_ENV === "test" ? "-test" : "");

const db = new Sequelize(
  process.env.DATABASE_URL ||
    `postgres://postgres:1234@localhost:5432/postgres`,
  {
    logging: false
  }
);
module.exports = db;
