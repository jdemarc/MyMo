const mongoose = require('mongoose');
const Workout = require('../models/workout');

module.exports = {
    create,
    delete: delExercise
}

function create(req, res) {

    Workout.findById(req.params.id, function(err, workout) {

        // Prevent a user with a different ID from adding exercises to a workout they did not create.
        if (req.user.id == workout.user) {
            workout.exercises.push(req.body);
            workout.save(function(err) {
                if (err) console.log("Error adding exercise.");
                
                res.redirect(`/workouts/${workout._id}`);
            });
        } else {
            res.redirect(`/workouts/${workout._id}`)
        }
    });
}

function delExercise(req, res) {
    Workout.findOne({ "exercises._id" : req.params.id }, function(err, workout) {
        //Prevent user who did not create the workout from deleting exercises in a workout.
        if (req.user.id == workout.user) {
            workout.exercises.id(req.params.id).remove();
            workout.save(function(err) {
                if (err) console.log("Error deleting exercise.");
                res.redirect(`/workouts/${workout._id}`);
            });
        } else {
            res.redirect(`/workouts/${workout._id}`)
        }
    });
}