const Workout = require('../models/workout');

module.exports = {
    index,
    new: newWorkout,
    create,
    show,
    delete: delWorkout,
    editWorkout
}

function index(req, res) {
    console.log('hitting workouts.index');
    Workout.find({})
    .populate('user').exec(function (err, workouts) {
        console.log(workouts);
        res.render('workouts/index', { workouts, title: 'My Workouts'});
    })
}

// When clicking the "add workout" link, render the workouts/new page.
function newWorkout(req, res) {
    res.render('workouts/new', { title: 'New Workout'});
}

// When clicking the confirm button on workouts/new, create a workout.
function create(req, res) {
    //SET DEFAULTS HERE
    // if (!(req.body.date)) delete req.body.date
    // if (!(req.body.duration)) delete req.body.duration
    console.log (req.body);

    const workout = new Workout(req.body);
    console.log(workout);

    workout.save(function(err) {
        if (err) return res.redirect('/workouts/new');

        res.redirect(`/workouts/index`);
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
        res.redirect('/workouts/index');
    });
}

function editWorkout(req, res) {
    Workout.findById(req.params.id, function(err, workout) {
        res.render('workouts/edit', { title: 'Edit Workout' });
    });
}