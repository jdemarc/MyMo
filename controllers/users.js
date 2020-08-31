const User = require('../models/user');
const Workout = require('../models/workout');

module.exports = {
    index,
}

// When clicking the 'View Workouts' link, render the user's workouts at users/index
// function index (req, res) {
//     Workout.find( {}, function (err, workouts) {
//         res.render('users/index', { workouts, title: 'My Workouts'});
//     })
// }

function index (req, res) {
    console.log('hitting user.index');
    Workout.find({})
    .populate('workout').exec(function (err, workouts) {
        console.log(workouts);
        res.render('users/index', { workouts, title: 'My Workouts'});
    })
}