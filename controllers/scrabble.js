var Scrabble = require('../lib/scrabble.js')
var scrabble = new Scrabble();

var ScrabbleController = {
  chart: function(req, res, next) {
    var locals = {};
    locals.title = 'Scrabble Express Chart';
    locals.chart = scrabble.letter_scores;
    res.render('chart', locals);
  },
  score: function(req, res, next) {
    var locals = {};
    locals.title = 'Score a word!';
    res.render('score', locals);
  },
  get_score: function(req, res, next) {
    var locals = {};
    var word = req.body.word;
    locals.title = 'Word Score';
    locals.word = word;
    locals.score = scrabble.score(word);
    res.render('scored', locals);
  },
  scored: function(req, res, next) {
    var locals = {};
    var word = req.params.word;
    locals.title = 'Scrabble Express Word Score';
    locals.word = word;
    locals.score = scrabble.score(word);
    res.render('scored', locals);
  }
}

module.exports = ScrabbleController;
