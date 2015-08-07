// Proyecto: Quiz
// URL: https://quiz2015dfmarin.herokuapp.com
// GIT: https://github.com/dfmarin/quiz
// Autor: dfmarin@gmail.com

var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

/* Inicio */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

/* Créditos */
router.get('/author', function(req, res) {
  res.render('author', { title: 'Créditos' });
});

/* Preguntas & Respuestas */
router.get('/quizes',                      quizController.index);
router.get('/quizes/:quizId(\\d+)',        quizController.show);
router.get('/quizes/:quizId(\\d+)/answer', quizController.answer);

module.exports = router;

