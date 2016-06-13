var express = require('express');
var router = express.Router();

/* GET chart page. */
router.get('/scrabble/chart', function(req, res, next) {
  res.render('chart', { title: 'Scrabble Express Chart' });
});

/* GET chart page. */
router.get('/scrabble/chart', function(req, res, next) {
  res.render('chart', { title: 'Scrabble Express Chart' });
});

module.exports = router;
