var express = require('express');
// var crypto = require('crypto');
var router = express.Router();
var config = '../config';

var sql = require('../mysql.js');
var bcrypt = require('bcryptjs');

var mongoose = require('mongoose');
mongoose.connect(
  config.mongodbUrl
); //pass in the address of the mlab instance we just created

require('../models/Users');
var User = mongoose.model('users');

// Signup: name, email, password, skills, aboutMe, phone, profileImage
router.post('/users/signup', function(req, res) {
  hashedPw = bcrypt.hashSync(req.body.password, 10);
  console.log('Signup user');
  // sql.addUser(
  //   req.body.name,
  //   req.body.email,
  //   hashedPw,
  //   req.body.skills,
  //   req.body.aboutMe,
  //   req.body.phone,
  //   req.body.profileImage,
  //   res
  // );
  User.findOne({ email: req.body.email }).then(existingUser => {
    if (existingUser) {
      // we already have a record of with given email
      console.log('already have an user');
      res.status(400).send('User already existed');
    } else {
      // we don't have a record, create a new one
      console.log('create one user');
      new User({
        email: req.body.email,
        name: req.body.name,
        password: hashedPw,
        skills: '',
        aboutMe: '',
        phone: '',
      }).save();
      res.status(200).send('Created successfully');
    }
  });
});

// Signin: email, password
router.post('/users/signin', function(req, res) {
  // sql.signIn(req.body.email, req.body.password, res);
  hashedPw = bcrypt.hashSync(req.body.password, 10);
  console.log(hashedPw);
  User.findOne({ email: req.body.email }).then(existingUser => {
    if (bcrypt.compareSync(req.body.password, existingUser.password)) {
      // user existed with right password
      // return email
      res.json({
        email: req.body.email
      });
    } else {
      // user not existed
      // TODO different error message
      console.log('Email not existed or password error');
      res.status(400).send('User/Password not existed');
    }
  });
});

// Update User: name, email, password, skills, aboutMe, phone, profileImage
router.post('/users/update', function(req, res) {
  console.log('Update user');
  // sql.updateUser(
  //   req.body.name,
  //   req.body.email,
  //   req.body.skills,
  //   req.body.aboutMe,
  //   req.body.phone,
  //   req.body.profileImage,
  //   res
  // );
  User.update({
    email: req.body.email
  },{
    skills: req.body.skills,
    aboutMe: req.body.aboutMe,
    phone: req.body.phone,
  }).then(updateSuccess => {
    if(updateSuccess) {
      res.status(200).send('Update User Info Successfully');
    } else {
      // Update error
      res.status(400).send('Update Error not existed');
    }
  })
});

// Get User Info
router.post('/users/info', function(req, res) {
  User.findOne({ email: req.body.email }).then(existingUser => {
    if (existingUser) {
      console.log(existingUser);
      // user existed return user infos
      // return infos
      res.json({
        email: existingUser.email,
        name: existingUser.name,
        phone: existingUser.phone,
        aboutMe: existingUser.aboutMe,
        skills: existingUser.skills,
      });
    } else {
      // user not existed
      // TODO different error message
      console.log('Email not existed');
      res.status(400).send('User/Password not existed');
    }
  });
});

module.exports = router;