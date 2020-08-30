const User = require('../models/user');
const Workout = require('../models/workout');

module.exports = {
    index,
}

// When clicking the 'View Workouts' link, render the user's workouts at users/index
function index (req, res) {
    Workout.find( {}, function (err, workouts) {
        // console.log(workouts);

        // workouts.forEach(function(ex) {
        //     console.log(ex);
        // })
        res.render('users/index', { workouts, title: 'My Workouts'});
    })
}
