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

module.exports = mongoose.model('Workout', workoutSchema);