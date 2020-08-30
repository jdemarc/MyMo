const User = require('../models/user');
const Workout = require('../models/workout');

module.exports = {
    create,
    delete: delExercise
}

function create(req, res) {
    // HANDLE DEFAULTS HERE
    // if (!req.body.arrival) delete req.body.arrival;
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