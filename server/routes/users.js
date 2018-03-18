var express = require('express');
// var crypto = require('crypto');
var router = express.Router();
var sql = require('../mysql.js');

// Signup: name, email, password, skills, aboutMe, phone, profileImage
router.post('/users/signup', function(req, res) {
  console.log('Signup user');
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

// Signin: email, password
router.post('/users/signin', function(req, res) {
  console.log('Signin user');
  sql.signIn(req.body.email, req.body.password, res);
});

// Update User: name, email, password, skills, aboutMe, phone, profileImage
router.post('/users/update', function(req, res) {
  console.log('Update user');
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

router.get('/users/:email', function(req, res) {
  console.log(req.params.email);
  sql.getUser(req.params.email, res);
});

// title, description, skillsRequired, budgetRange, employer, completeDate, bidId
router.post('/projects/create', function(req, res) {
  console.log('Creating project');
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

router.get('/projects/:employer', function(req, res) {
  console.log(req.params);
  sql.getProject(req.params.employer, res);
});

// freelancer, price, created, project
router.post('/bids/create', function(req, res) {
  console.log('Create bid');
  sql.addBid(
    req.body.freelancer,
    req.body.price,
    req.body.created,
    req.body.project,
    res
  );
});

router.post('/bids', function(req, res) {
  console.log('Get bid');
  sql.getUser(req.body.id, res);
});

router.post('/bids/average', function(req, res) {
  console.log('Get average bid');
  sql.calculateAvgBid(req.body.project, res);
});

module.exports = router;
