var mysql = require('mysql');
const createUsersTableQuery = `
CREATE TABLE IF NOT EXISTS USERS (
	Id INT NOT NULL,
	name VARCHAR(20) NOT NULL,
	email VARCHAR(20) NOT NULL,
	password VARCHAR(255) NOT NULL,
	skills VARCHAR(255),
	aboutMe VARCHAR(255),
	phone CHAR(10),
	PRIMARY KEY (Id)
)
`;

const createProjectsTableQuery = `
CREATE TABLE IF NOT EXISTS PROJECTS (
	Id INT NOT NULL,
	title VARCHAR(20) NOT NULL,
	description VARCHAR(255) NOT NULL,
	skillsRequired VARCHAR(255),
	budgetRange VARCHAR(255),
	Employer VARCHAR(255) NOT NULL,
	PRIMARY KEY (Id)
)
`;

const createBidsTableQuery = `
CREATE TABLE IF NOT EXISTS BIDS (
Id INT NOT NULL,
freelancer VARCHAR(255) NOT NULL,
price DECIMAL(18,2) NOT NULL,
created DATE NOT NULL,
PRIMARY KEY (Id)
)
`;

const testSelect = `
SELECT * FROM USERS
WHERE NAME = 'test'
`;
/**
  * connect to local mysql createServer
*/
var sql = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  port: 8889,
  database: 'mydb'
});

sql.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  sql.query("CREATE DATABASE IF NOT EXISTS mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
  sql.query(createUsersTableQuery, function (err, result) {
    if (err) throw err;
    console.log("users table created");
  });
  sql.query(createProjectsTableQuery, function (err, result) {
    if (err) throw err;
    console.log("projects table created");
  });
  sql.query(createBidsTableQuery, function (err, result) {
    if (err) throw err;
    console.log("bids table created");
  });
  sql.query(testSelect, function(err, result) {
    console.log(result[0].name);
  })
});

module.exports = sql;
