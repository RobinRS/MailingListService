const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var dlModel = new Schema({
  displayName: String,
  description: String,
  customMail: String,
  adminKey: String,
  private: Boolean,
  users: Array
});

const DL = mongoose.model('DL', dlModel );

module.exports = DL;