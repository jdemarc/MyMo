const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema ({
    date: {
        type: Date,
        default: Date.now,
    },

    calories: {
        type: Number,
        default: 0
    },

    duration: {
        hours: Number,
        minutes: Number,
        default: 0
    },

    exercise: {
        type: Schema.Types.ObjectId,
        ref: 'Exercise'
    }
});

module.exports = mongoose.model('Workout', workoutSchema);