const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "DarkArtsPW",
    database: "burgers_db",
});

connection.connect( (err) => {
    if (err) {
        console.error("error connection: " + err.stack);
        return;
    }
    console.log("Connected as id " + connection.threadId);
})

module.exports = connection;