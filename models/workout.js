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
        type: String,
        default: 'Workout X'
    },

    date: {
        type: Date,
        // This converts UTC to EST.
        default: () => new Date(+new Date() - 4*60*60*1000)
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
