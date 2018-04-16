var mongoose = require('mongoose');
var { Schema } = mongoose; // Destructuring of "var Schema = mongoose.Schema;"

var userSchema = new Schema({
  title: String,
  description: String,
  skills: String,
  budgetRange: String,
  employer: String,
  completeDate: String,
  bidId: String,
  bidPrice: String,
  bidDate: String,
});

mongoose.model('projects', userSchema);
