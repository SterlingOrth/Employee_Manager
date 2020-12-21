const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",
  port: 8080,
  user: "root",
  password: "Mysqlroot123",
  database: "emp_managerDB",
});

connection.connect((err) => {
  if (err) throw err;
  runSearch();
});

// const runSearch = () => {
//     inquirer
//         .prompt({
//             name: 'action',
//             type: 'list',
//             message: 'Would you like to add:',
//             choices: [
//                 'Department',
//                 'Role',
//                 'Employee',
//         ],
//     })
//     .then((answer) => {
//         switch (answer.action) {
//             case ''
//         }

//     })

// }
