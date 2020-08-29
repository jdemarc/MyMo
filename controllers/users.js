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

function addWorkout (req, res) {

    req.user.workouts.push(req.body);
    req.user.save(function(err) {
        res.redirect('/home');
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
