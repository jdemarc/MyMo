const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema ({
    name: {
        type: String,
        match: /^[a-zA-Z0-9 -]*$/
    },

    muscle: {
        type: String,
    },

    description: {
        type: String
    }
});

const workoutSchema = new Schema ({
    name: {
        type: String,
        // Change X to a random number.
        match: /^[a-zA-Z0-9 ]*$/,
        default: 'Workout X'
    },

    date: {
        type: Date,
        default: Date.now
    },

    duration: {
        type: Number,
        match: /\d+/,
        default: 30
    },

    calories: {
        type: Number,
        match: /\d+/,
        default: 0
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    exercises: [exerciseSchema]
});

module.exports = mongoose.model('Workout', workoutSchema);
