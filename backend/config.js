require("dotenv").config();

module.exports = {
  DB_URI: process.env.DB_URI || "mongodb://localhost:27017/studentdb",
  SECRET_KEY: process.env.SECRET_KEY || "yoursecretkey",
};
