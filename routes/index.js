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
router.get('/quizes/question', quizController.question);
router.get('/quizes/answer', quizController.answer);

module.exports = router;
