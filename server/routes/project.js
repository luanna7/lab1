var express = require('express');
// var crypto = require('crypto');
var router = express.Router();
var config = '../config';

var sql = require('../mysql.js');

var mongoose = require('mongoose');
mongoose.connect(
  config.mongodbUrl
); //pass in the address of the mlab instance we just created

require('../models/Project');
var Project = mongoose.model('projects');

// title, description, skillsRequired, budgetRange, employer, completeDate, bidId
router.post('/projects/create', function(req, res) {
  console.log('Creating project');
  Project.findOne({ title: req.body.title }).then(existingProject => {
    if (existingProject) {
      // we already have a record of with given email
      console.log('already have this project');
      res.status(400).send('Project already existed');
    } else {
      // we don't have a record, create a new one
      console.log('create one project');
      new Project({
        title: req.body.title,
        description: req.body.description,
        skills: req.body.skills,
        budgetRange: req.body.budgetRange,
        employer: req.body.employer,
        completeDate: new Date().getTime(), //timestamp
        bidId: '',
        bidPrice: '',
      }).save();
      res.status(200).send('Created successfully');
    }
  });
  // sql.addProject(
  //   req.body.title,
  //   req.body.description,
  //   req.body.skillsRequired,
  //   req.body.budgetRange,
  //   req.body.employer,
  //   req.body.completeDate,
  //   req.body.bidId,
  //   res
  // );
});

router.get('/projects/:employer', function(req, res) {
  // user created project
  // console.log(req.params);
  // sql.getProject(req.params.employer, res);
  Project.find({employer: req.params.employer}).then(lists => {
    if(lists) {
      res.json(lists);
    } else {
      res.status(400).send('no Project');
    }
  })
});

router.get('/bids/:user', function(req, res) {
  // get user's bids
  Project.find({bidId: req.params.user}).then(lists => {
    if(lists) {
      res.json(lists);
    } else {
      res.status(400).send('no Project');
    }
  })
  // console.log(req.params);
  // sql.getBidProject(req.params.user, res);
});

router.get('/projects', function(req, res) {
  // get all opening project
  // sql.getAllProjects(res);
  Project.find({bidId: ''}).then(lists => {
    if(lists) {
      res.json(lists);
    } else {
      res.status(400).send('no Project');
    }
  })
});

// freelancer, price, created, project
router.post('/bids/create', function(req, res) {
  console.log('Create bid');
  console.log(req.body);
  Project.update({
    _id: req.body.project
  },{
    bidId: req.body.freelancer,
    bidPrice: req.body.price,
    bidDate: new Date().getTime(), //timestamp
  }).then(updateSuccess => {
    if(updateSuccess) {
      res.status(200).send('Update User Info Successfully');
    } else {
      // Update error
      res.status(400).send('Update Error not existed');
    }
  })
  // sql.addBid(
  //   req.body.freelancer,
  //   req.body.price,
  //   req.body.created,
  //   req.body.project,
  //   res
  // );
});

router.post('/bids', function(req, res) {
  console.log('Get bid');
  sql.getBid(req.body.id, res);
});

router.post('/bids/average', function(req, res) {
  console.log('Get average bid');
  sql.calculateAvgBid(req.body.project, res);
});

module.exports = router;
