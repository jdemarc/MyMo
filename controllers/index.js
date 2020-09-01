const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const Workout = require('../models/workout');

module.exports = {
    showStats
}

// This function aggregates stats for individual users.

function showStats(req, res) {

    Workout.aggregate([
        { $match: { user: ObjectId(req.user.id) } },
        { $group: { _id: null, durationSum: { $sum: "$duration" }, calorieSum: { $sum: "$calories"} } },

    ], function (err, stats) {
        if (err) console.log('Error');

        let totalDuration = convertTime(stats[0].durationSum);
        let totalCalories = stats[0].calorieSum;

        res.render('home', { title: 'MyMo', totalDuration, totalCalories });
    });
};

//-------------------------------------------------------------------------------------

function convertTime(mins) {
    let hours = Math.floor(mins/60);
    let minutes = mins % 60;

    let time = 0;

    (!hours) ? time = `${minutes} minutes` : time = `${hours} hours, ${minutes} minutes`;

    return time;
}