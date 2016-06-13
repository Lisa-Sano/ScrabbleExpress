var express = require('express');
var router = express.Router();

/* GET chart page. */
router.get('/chart', function(req, res, next) {
  res.render('chart', { title: 'Scrabble Express Chart' });
});

/* GET word score page. */
router.get('/score/:word', function(req, res, next) {
  locals.title = 'Scrabble Express Word Score';
  locals.word = request.params.word;
  res.render('score', locals);
});

module.exports = router;
