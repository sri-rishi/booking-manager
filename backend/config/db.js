const mysql = require("mysql2");


const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: process.env.DB_PASSWORD,
    database: "booking_db",
    database: "booking_db",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
})


module.exports = db;