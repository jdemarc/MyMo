const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema ({
    title: {
        type: String
    },

    date: {
        type: Date,
        default: Date.now,
    },

    calories: {
        type: Number,
        match: /\d+/,
        default: 0
    },

    duration: {
        type: Number,
        match: /\d+/,
        default: 0
    },

    exercise: {
        type: Schema.Types.ObjectId,
        ref: 'Exercise'
    }
});

const userSchema = new Schema({
    name: String,
    email: String,
    avatar: String,
    workouts: [workoutSchema],
    googleId: String
  }, {
    timestamps: true
});

  module.exports = mongoose.model('User', userSchema);