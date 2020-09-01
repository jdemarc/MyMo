const Workout = require('../models/workout');

module.exports = {
    showStats
}

// This function aggregates stats for individual users.

function showStats(req, res) {
    Workout.aggregate([ 

        { $group: 
            {   _id: "$user",

                durationSum: { 
                    $sum: "$duration"
                },
                calorieSum: {
                    $sum: "$calories"
                }
            },
        },

    ], function(err, stats) {

        console.log(stats);

        let totalDuration = stats.map(d => d.durationSum);
        let totalCalories = stats.map(c => c.calorieSum);

        totalDuration = convertTime(totalDuration);

        res.render('home', { title: 'MyMo', totalDuration, totalCalories });
    });
}

//-------------------------------------------------------------------------------------

function convertTime(mins) {
    let hours = Math.floor(mins/60);
    let minutes = mins % 60;

    return `${hours} hours ${minutes} minutes`;
}