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

module.exports = mongoose.model('Exercise', workoutSchema);