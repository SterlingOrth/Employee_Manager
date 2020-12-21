const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Mysqlroot123",
  database: "emp_managerDB",
});

const runTracker = () => {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "Would you like to do?",
      choices: [
        "Add department",
        "Add role",
        "Add employee",
        "View department",
        "View role",
        "View employee",
        "Update employee",
        "Exit",
      ],
    })
    .then((answer) => {
      switch (answer.action) {
        case "Add department":
          addDepartment();
          break;

        case "Add role":
          addRole();
          break;

        case "Add employee":
          addEmployee();
          break;

        case "View department":
          viewDepartment();
          break;

        case "View role":
          viewRole();
          break;

        case "View employee":
          viewEmployee();
          break;

        case "Update employee":
          updateEmployee();
          break;

        case "Exit":
          connection.end();
          break;

        default:
          console.log(`Invalid action: ${answer.action}`);
          break;
      }
    });
};

const addDepartment = () => {
  inquirer
    .prompt([
      {
        name: "id",
        type: "input",
        message: "What id number?",
      },
      {
        name: "name",
        type: "input",
        message: "What do you want department name to be?",
      },
    ])
    .then((answer) => {
      console.log(answer);
      connection.query("INSERT INTO department SET ?", answer, (err) => {
        if (err) throw err;
        runTracker();
      });
    });
};

const addRole = () => {
  inquirer
    .prompt([
      {
        name: "id",
        type: "input",
        message: "What id number?",
      },
      {
        name: "title",
        type: "input",
        message: "What do you want title to be?",
      },
      {
        name: "salary",
        type: "input",
        message: "What do you want salary to be?",
      },
      {
        name: "department_id",
        type: "input",
        message: "What do you want department role id to be?",
      },
    ])
    .then((answer) => {
      console.log(answer);
      connection.query("INSERT INTO role SET ?", answer, (err) => {
        if (err) throw err;
        runTracker();
      });
    });
};

const addEmployee = () => {
  inquirer
    .prompt([
      {
        name: "id",
        type: "input",
        message: "What id number?",
      },
      {
        name: "first_name",
        type: "input",
        message: "What is employee's first name?",
      },
      {
        name: "last_name",
        type: "input",
        message: "What is employee's last name?",
      },
      {
        name: "role_id",
        type: "input",
        message: "What do you want department role id to be?",
      },
      {
        name: "manager_id",
        type: "input",
        message: "Is this employee a manager?",
      },
    ])
    .then((answer) => {
      console.log(answer);
      connection.query("INSERT INTO employee SET ?", answer, (err) => {
        if (err) throw err;
        runTracker();
      });
    });
};

const viewDepartment = () => {
  connection.query("SELECT * FROM department", (err, res) => {
    if (err) throw err;
    console.table(res);
    connection.end();
  });
};

const viewRole = () => {
  connection.query("SELECT * FROM role", (err, res) => {
    if (err) throw err;
    console.table(res);
    connection.end();
  });
};

const viewEmployee = () => {
  connection.query("SELECT * FROM employee", (err, res) => {
    if (err) throw err;
    console.table(res);
    connection.end();
  });
};

// const updateEmployee = () => {

// };

connection.connect((err) => {
  if (err) throw err;
  runTracker();
});
