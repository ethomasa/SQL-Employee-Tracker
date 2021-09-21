
const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: "localhost",
  
    // port;
    port: 3306,
  
    //  username
    user: "root",
  
    // password
    password: "",
    database: "employee_db"
  },

  console.log(`Connected to the employee database.`)
  
  );
  module.exports = connection;