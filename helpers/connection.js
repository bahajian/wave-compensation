
const mysql = require("mysql");
const dbConfig = require("./db.config.js");
const util = require('util');
// Create a connection to the database
const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});
const query = util.promisify(connection.query).bind(connection);
// open the MySQL connection
connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
});

module.exports.connection = connection;
module.exports.query = query;
