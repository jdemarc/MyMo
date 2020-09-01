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
        { $group: { _id: null, durationSum: { $sum: "$duration" }, calorieSum: { $sum: "$calories"},
            workoutSum: { $sum: 1 }} },

    ], function (err, stats) {
        if (err) console.log('Error');

        console.log(stats);

        let totalDuration = convertTime(stats[0].durationSum);
        let totalCalories = stats[0].calorieSum;
        let totalWorkouts = stats[0].workoutSum;

        res.render('home', { title: 'MyMo', totalDuration, totalCalories, totalWorkouts });
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