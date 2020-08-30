const User = require('../models/user');
const Workout = require('../models/workout');

module.exports = {
    new: newExercise,
    addExercises,
}

function newExercise(req, res) {
    res.render(`/workouts/${req.params.id}/exercises/new`, { title: 'Add Exercise' });
}

function addExercises(req, res) {

}