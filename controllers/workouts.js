const Workout = require('../models/workout');

module.exports = {
    index,
    new: newWorkout,
    create,
    show,
    delete: delWorkout,
    edit,
    update,
    search
}

// Display all workouts according to user logged in.
function index(req, res) {
    Workout.find( {'user' : req.user.id} )
    .populate('user').exec(function (err, workouts) {
            res.render('workouts/index', { workouts, title: 'My Workouts'});
    });
}

// When clicking the "add workout" link, render the workouts/new page.
function newWorkout(req, res) {
    const workoutDate = getCurrentDateTime();

    res.render('workouts/new', { workoutDate, title: 'New Workout'});
}

// When clicking the confirm button on workouts/new, create a workout.
function create(req, res) {

    //If no title is entered, default to a random title.
    if (!(req.body.name)) delete req.body.name

    //If no date is entered, default to current date and time.
    if (!(req.body.date)) delete req.body.date

    //If no duration is entered, default to 30.
    if (!(req.body.duration)) delete req.body.duration

    //If no calories are entered, default to 0.
    if (!(req.body.calories)) delete req.body.calories

    req.body.user = req.user.id;
    const workout = new Workout(req.body);

    workout.save(function(err) {
        if (err) {
            console.log('Error.')
            return res.redirect('/workouts/new');
        }

        res.redirect(`/workouts/${workout._id}`);
    })
}

// This function will render the workout and allow user to add exercises.
function show(req, res) {
    const user = req.user.id;

    Workout.findById(req.params.id)
    .populate('user').exec(function (err, workout) {
        res.render('workouts/show', { workout, user, title: 'Workout'} );
    })
}

// When clicking the delete button, remove a workout and refresh the page.
function delWorkout(req, res) {
    Workout.findByIdAndDelete(req.params.id, function (err) {
        res.redirect('/workouts/index');
    });
}

// Renders edit.ejs
function edit(req, res) {
    const currentDate = getCurrentDateTime();

    Workout.findById(req.params.id, function(err, workout) {
        res.render('workouts/edit', { workout, currentDate, title: 'Edit Workout' });
    });
}

// Update workout properties.
function update(req, res) {
    Workout.findByIdAndUpdate(req.params.id, 
        {   name: req.body.name,
            date: req.body.date,
            duration: req.body.duration,
            calories: req.body.calories,
        }, function (err) {
            if (err) console.log('Failed to update workout.');
            console.log('Workout successfully updated.')
        
            res.redirect('/workouts/index');
    });
}

function search(req, res) {
    let modelQuery = req.query.name ? { name: new RegExp(req.query.name, 'i')} : {};

    Workout.find(modelQuery, function(err, foundWorkouts) {
        if (err) return next(err);
            res.render('workouts/search', { foundWorkouts, title: 'Search Results'});
    });
}
//-----------------------------------------------------------------------------------

// Function to generate current date and time
function getCurrentDateTime() {
    //Display date to user as EST. Store in database as UTC.
    const dt = new Date(+new Date() - 4*60*60*1000)

    return dt.toISOString().slice(0, 16);
}