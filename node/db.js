const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit:10,
    host: "localhost",
    user: "root",
    password: "qq123",
    database: "ke"
})


module.exports = pool;