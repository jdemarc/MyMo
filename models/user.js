const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    email: String,
    avatar: String,
    //workouts: [workoutSchema],
    googleId: String
  }, {
    timestamps: true
  });

  module.exports = mongoose.model('User', userSchema);