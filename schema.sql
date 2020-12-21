DROP DATABASE IF EXISTS emp_managerDB;
CREATE DATABASE emp_managerDB;

USE emp_managerDB;

CREATE TABLE department (
	id INT NOT NULL PRIMARY KEY,
	name VARCHAR(30)
);

CREATE TABLE role (
	id INT NOT NULL PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10,2) NOT NULL,
    department_id INT NOT NULL
);

CREATE TABLE employee (
	id INT NOT NULL PRIMARY KEY,
	first_name VARCHAR(30) NOT NULL,
	last_name VARCHAR(30) NOT NULL,
	role_id INT NOT NULL
);

INSERT INTO department ( id, name)
VALUES ("1", "Tom_Holland");

INSERT INTO role ( id, title, salary, department_id)
VALUES ("1", "manager", 80000, 3);

INSERT INTO employee ( id, first_name, last_name, role_id)
VALUES ("1", "Tom", "Holland", 88);



SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;



