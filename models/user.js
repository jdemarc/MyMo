const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    avatar: String,
    googleId: String,

    workouts: {
        type: Schema.Types.ObjectId,
        ref: 'Workout'
    }
  }, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);