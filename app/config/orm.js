const connection = require("./connection")

const orm = {
    selectAll: function(columns, tableName, cb) {
        const queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [columns, tableName], (err, data) => {
            if (err) throw err;
            console.log(data);
            cb(data);
        });
    },

    insertOne: function (tableName, values, cb) {
        const queryString = "INSERT INTO ?? SET ?";
        connection.query(queryString, [tableName, values, cb], (err, data) => {
            if (err) throw err;
            console.log(data);
            cb(data)
        })
    },


    updateOne: function(tableName, newValue, targetID, cb) {
        const queryString = "UPDATE ?? SET ? WHERE ID = ?";
        connection.query(queryString,[tableName, newValue, targetID ], (err, data) => {
            if (err) throw err;
            console.log(data)
            cb(data)
        });
    }


}

module.exports = orm;