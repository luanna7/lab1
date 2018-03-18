var express = require('express');
// var crypto = require('crypto');
var router = express.Router();
var sql = require('../mysql.js');

// name, email, password, skills, aboutMe, phone, profileImage
router.post('/users/signup', function(req, res) {
  console.log('Adding user');
  sql.addUser(
    req.body.name,
    req.body.email,
    req.body.password,
    req.body.skills,
    req.body.aboutMe,
    req.body.phone,
    req.body.profileImage,
    res
  );
});

// name, email, password, skills, aboutMe, phone, profileImage
router.post('/users/update', function(req, res) {
  console.log('update user');
  sql.updateUser(
    req.body.name,
    req.body.email,
    req.body.password,
    req.body.skills,
    req.body.aboutMe,
    req.body.phone,
    req.body.profileImage,
    res
  );
});

router.post('/users', function(req, res) {
  console.log(req.body.email);
  sql.getUser(req.body.email, res);
});

// title, description, skillsRequired, budgetRange, employer, completeDate, bidId
router.post('/projects/create', function(req, res) {
  console.log('Adding project');
  sql.addProject(
    req.body.title,
    req.body.description,
    req.body.skillsRequired,
    req.body.budgetRange,
    req.body.employer,
    req.body.completeDate,
    req.body.bidId,
    res
  );
});

router.post('/projects', function(req, res) {
  console.log('get project');
  sql.getUser(req.body.employer, res);
});

// freelancer, price, created, project
router.post('/bids/create', function(req, res) {
  console.log('Adding bid');
  sql.addBid(
    req.body.freelancer,
    req.body.price,
    req.body.created,
    req.body.project,
    res
  );
});

router.post('/bids', function(req, res) {
  console.log('get bid');
  sql.getUser(req.body.id, res);
});

router.post('/bids/average', function(req, res) {
  console.log('average bid');
  sql.getAvgBid(req.body.project, res);
});

module.exports = router;
