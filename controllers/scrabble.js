var Scrabble = require('../lib/scrabble.js')
var scrabble = new Scrabble();

var ScrabbleController = {
  chart: function(req, res, next) {
    var locals = {};
    locals.title = 'Scrabble Express Chart'
    res.render('chart', locals);
  },
  score: function(req, res, next) {
    var locals = {};
    locals.title = 'Scrabble Express Word Score';
    locals.word = req.params.word;
    res.render('score', locals);
  }
}

module.exports = ScrabbleController;
