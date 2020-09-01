const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const Workout = require('../models/workout');

module.exports = {
    showStats,
}

// Shows user's stats based on aggregation of workouts.
function showStats(req, res) {

    // _id: must be null for $group
    Workout.aggregate([
        { $match: { user: ObjectId(req.user.id) } },
        { $group: { _id: null, durationSum: { $sum: "$duration" }, calorieSum: { $sum: "$calories"},
            workoutSum: { $sum: 1 }} },

    ], function (err, stats) {
        if (err) console.log('Error');

        let totalDuration = 0,
            totalCalories = 0,
            totalWorkouts = 0;

        if (stats.length) {
            totalDuration = stats[0].durationSum;
            totalCalories = stats[0].calorieSum;
            totalWorkouts = stats[0].workoutSum;
        }

        res.render('home', { title: 'MyMo', stats, totalDuration, totalCalories, totalWorkouts });
    });
};

//-------------------------------------------------------------------------------------

// function convertTime(mins) {
//     let hours = Math.floor(mins/60);
//     let minutes = mins % 60;

//     let time = 0;

//     let hrString = 'hours';
//     let minString = 'minutes';

//     if (hours === 1) hrString = 'hour';
//     if (minutes === 1) minString = 'minute';

//     (!hours) ? time = `${minutes} ${minString}` : time = `${hours} ${hrString}, ${minutes} ${minString}`;

//     return time;
// }