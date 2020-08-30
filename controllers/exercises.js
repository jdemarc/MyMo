const User = require('../models/user');
const Workout = require('../models/workout');

module.exports = {
    create,
    delete: delExercise
}

// function newExercise(req, res) {
//     Workout.findById(req.params.id, function (err, workout) {
//         res.render(`/workouts/${req.params.id}/exercises/new`, { title: 'Add Exercise' });
//     })
// }

function create(req, res) {
    // HANDLE DEFAULTS HERE
    // if (!req.body.arrival) delete req.body.arrival;

    console.log("Saving to workout");

    Workout.findById(req.params.id, function(err, workout) {
        workout.exercises.push(req.body);
        workout.save(function(err) {
            res.redirect(`/workouts/${workout._id}`);
        });
    });
}

function delExercise(req, res) {
    Workout.findOne({ "exercises._id" : req.params.id }, function(err, workout) {
        workout.exercises.id(req.params.id).remove();
        workout.save(function(err) {
            res.redirect(`/workouts/${workout._id}`)
        })
    });
}