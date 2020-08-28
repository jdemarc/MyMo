const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    cohort: String,
    avatar: String,
    workouts: [workoutSchema],
    googleId: String
  }, {
    timestamps: true
  });