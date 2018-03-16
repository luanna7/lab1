var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post("/users/signup", function(req, res, next) {
  console.log(req.body);
});

module.exports = router;
