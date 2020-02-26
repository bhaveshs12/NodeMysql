const mysql = require("mysql");
const config = require("../../config");

const con = mysql.createConnection({
    host: config.databaseHost,
    database: config.databaseDatabaseName,
    user: config.databaseUser,
    password: config.databasePassword
});

con.connect(function(err) {
    if(err) {
        console.log("Failed to connect db");
        console.log(err);
        return err;
    }
    else
        console.log("Database connected successfully.");
});

module.exports = con;