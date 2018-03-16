var express = require('express');
// var crypto = require('crypto');
var router = express.Router();
// var sql = require('../mysql.js');

// const createUserQuery = (name, email, password) => `
// INSERT INTO USERS(name, email, password)
// VALUES (${name}, ${email}, ${password})
// `;

router.post("/users/signup", function(req, res, next) {
  console.log(req.body);
  // const { name, password, email } = req.body;
  // const encodedPassword = encodePassword(password)
  // sql.query(createUserQuery(name, email, encodedPassword), function(err, result) {
  //   if (err) throw err;
  //   response.body = {
  //     name,
  //     email,
  //   }
  // })
});

module.exports = router;
