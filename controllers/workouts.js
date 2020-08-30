const Workout = require('../models/workout');

module.exports = {
    new: newWorkout,
    create,
    show,
    delete: delWorkout
}

function newWorkout(req, res) {
    res.render('workouts/new', { title: 'New Workout'});
}

function create(req, res) {
    const workout = new Workout(req.body);

    workout.save(function(err) {
        if (err) return res.redirect('/workouts/new');

        res.render('workouts/show', { title: 'Add Exercise(s)', workout });
    })
}

function show(req, res) {
    Workout.findById(req.params.id, function (err, workouts) {
        res.render('user/index', { workouts, title: 'Workout Details'} );
    })
}

function delWorkout(req, res) {
    Workout.findByIdAndDelete(req.params.id, function (err) {
        res.redirect('/users/index');
    });
}