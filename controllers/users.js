const User = require('../models/user');

module.exports = {
    index,
    addWorkout,
    delWorkout,
}

function index (req, res) {
    User.findById(req.user.id, function (err, user) {
        res.render('users/index', { user, title: 'My Workouts'});
    })
}

function addWorkout (req, res) {
    req.user.workouts.push(req.body);
    req.user.save(function(err) {

        res.redirect('/users/index');
    });

}

function delWorkout (req, res) {
    User.findOne( {"workouts._id" : req.params.id }, function (err, user) {
        user.workouts.id(req.params.id).remove();
        user.save(function (err) {
            res.redirect('/users/index');
        });
    });
}
