const User = require('../models/user');
const Workout = require('../models/workout');

module.exports = {
    index,
    // addWorkout,
    // delWorkout,
}

function index (req, res) {
    Workout.find( {}, function (err, workouts) {
        res.render('users/index', { workouts, title: 'My Workouts'});
    })
}

// function addWorkout (req, res) {
//     req.user.workouts.push(req.body);
//     req.user.save(function(err) {

//         res.redirect('/users/index');
//     });

// }

// function delWorkout (req, res) {
//     User.findOne( {"workouts._id" : req.params.id }, function (err, user) {
//         user.workouts.id(req.params.id).remove();
//         user.save(function (err) {
//             res.redirect('/users/index');
//         });
//     });
// }
