const Users = require('../models/user');
const Exercise = require('../models/exercise');

module.exports = {
    index,
    addWorkout,
    delWorkout,
}

function addWorkout (req, res) {
    console.log(req.body);
    req.user.workouts.push(req.body);
    req.user.save(function(err) {
        res.redirect('/home');
    });
}

function delWorkout (req, res) {

}

function index (req, res) {
    Users.findById(req.user.id, function (err, user) {
        res.render('users/index', { user, title: 'My Workouts'});
    })
}