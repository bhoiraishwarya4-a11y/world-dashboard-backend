const mysql = require('mysql2');

const connection = mysql.createPool({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

connection.getConnection((err, conn) => {
    if (err) {
        console.error('Database connection failed:', err.message);
        return;
    }

    console.log('MySQL Database Connected Successfully');
    conn.release();
});

module.exports = connection.promise();