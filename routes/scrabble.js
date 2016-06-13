var express = require('express');
var router = express.Router();
var Controller = require('../controllers/scrabble')

/* GET chart page. */
router.get('/chart', Controller.chart);

/* GET word score page. */
router.get('/score/:word', Controller.scored);

module.exports = router;
