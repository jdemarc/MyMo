var express = require('express');
var router = express.Router();
var exercisesCtrl = require('../controllers/exercises');

/* GET users listing. */
router.get('/home', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;