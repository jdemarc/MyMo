const Workout = require('../models/workout');

module.exports = {
    new: newWorkout,
    create,
    show,
    delete: delWorkout
}

// When clicking the "add workout" link, render the workouts/new page.
function newWorkout(req, res) {
    res.render('workouts/new', { title: 'New Workout'});
}

// When clicking the confirm button on workouts/new, create a workout.
function create(req, res) {
    console.log("hitting create");

    //SET DEFAULTS HERE
    // if (!(req.body.date)) delete req.body.date
    // if (!(req.body.duration)) delete req.body.duration

    const workout = new Workout(req.body);

    workout.save(function(err) {
        if (err) return res.redirect('/workouts/new');

        res.redirect(`/workouts/${workout._id}`);
    })
}

// This function will render the workout and allow user to add exercises.
function show(req, res) {
    Workout.findById(req.params.id, function (err, workout) {
        res.render('workouts/show', { workout, title: 'Workout Details'} );
    })
}

// When clicking the delete button, remove a workout and refresh the page.
function delWorkout(req, res) {
    Workout.findByIdAndDelete(req.params.id, function (err) {
        res.redirect('/users/index');
    });
}