const Users = require('../models/user');
const Exercise = require('../models/exercise');

module.exports = {
    index,
    addWorkout,
    delWorkout,
}

function index (req, res) {
    Users.findById(req.user.id, function (err, user) {
        console.log(user);
        res.render('users/index', { user, title: 'My Workouts'});
    })
}

// After adding a workout, the user should be forwarded to a page where
// he or she can add the exercises.
// Currently, they are redirected to the list of their workouts.
function addWorkout (req, res) {
    req.user.workouts.push(req.body);
    req.user.save(function(err) {
        res.redirect('/users/index');
    });
}

function delWorkout (req, res) {
    Users.findOne( {"workouts._id" : req.params.id }, function (err, user) {
        user.workouts.id(req.params.id).remove();
        user.save(function (err) {
            res.redirect('/users/index');
        });
    });
}
