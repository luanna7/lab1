var mongoose = require('mongoose');
var { Schema } = mongoose; // Destructuring of "var Schema = mongoose.Schema;"

var userSchema = new Schema({
  email: String,
  name: String,
  password: String
});

mongoose.model('users', userSchema);
