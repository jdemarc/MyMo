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
    name: {
        type: String,
        // Change X to a random number.
        default: 'Workout X'
    },

    date: {
        type: Date,
        // This converts UTC to EST.
        // Let client do conversion.
        // default: Date.now
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
