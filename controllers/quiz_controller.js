// Proyecto: Quiz
// URL: https://quiz2015dfmarin.herokuapp.com
// GIT: https://github.com/dfmarin/quiz
// Autor: dfmarin@gmail.com

var models = require('../models/models.js');

// GET /quizes
exports.question = function(req, res) {
   models.Quiz.findAll().then( function(quiz) {
      res.render('quizes/index.ejs', { quizes: quizes });
   })
};

// GET /quizes/:id
exports.question = function(req, res) {
   models.Quiz.find(req.params.quizId).then( function(quiz) {
      res.render('quizes/show', { quiz: quiz });
   })
};

// GET /quizes/:id/answer
exports.answer = function(req, res) {
   models.Quiz.find(req.params.quizId).then( function(quiz) {
      if (req.query.respuesta === quiz[0].respuesta) {
         res.render('quizes/answer', 
                   { quiz: quiz, respuesta: 'Correcto' });
      } else {
         res.render('quizes/answer', 
                   { quiz: quiz, respuesta: 'Incorrecto' });
      }
   })
};

