const User = require('../models/user');
const Workout = require('../models/workout');

module.exports = {
    create,
    delete: delExercise
}

function create(req, res) {
    Workout.findById(req.params.id, function(err, workout) {
        workout.exercises.push(req.body);
        workout.save(function(err) {
            if (err) console.log("Error adding exercise.");

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