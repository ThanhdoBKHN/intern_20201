const mysql = require('mysql')

// create db connection
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'mii_expressjs'
})

//connect to db
conn.connect((err) => {
    if(err) throw err;
    console.log('My sql connected...');
})

module.exports = {
    conn
}