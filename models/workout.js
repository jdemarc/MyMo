const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema ({
    name: {
        type: String
    },

    muscle: {
        type: String,
    },

    description: {
        type: String
    }
});

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
        default: 75
    },

    duration: {
        type: Number,
        match: /\d+/,
        default: 30
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    exercises: [exerciseSchema]
});

module.exports = mongoose.model('Workout', workoutSchema);
