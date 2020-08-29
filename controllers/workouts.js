const Workout = require('../models/workout');
const Exercise = require('../models/exercise');

module.exports = {
    new: newWorkout
}

function newWorkout(req, res) {
    res.render('workouts/new', { title: 'New Workout'});
}