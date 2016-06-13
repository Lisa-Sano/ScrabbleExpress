var express = require('express');
var router = express.Router();
var Controller = require('../controllers/scrabble')

/* GET chart page. */
router.get('/chart', Controller.chart);

/* GET score form. */
router.get('/score', Controller.score);

/* POST score form. */
router.post('/score', Controller.get_score);

/* GET scored word page. */
router.get('/score/:word', Controller.scored);

module.exports = router;
