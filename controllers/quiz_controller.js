// Proyecto: Quiz
// URL: https://quiz2015dfmarin.herokuapp.com
// GIT: https://github.com/dfmarin/quiz
// Autor: dfmarin@gmail.com

var models = require('../models/models.js');

// Autoload: extrae el codigo si la ruta incluye :quizId
exports.load = function(req, res, next, quizId) {
   models.Quiz.find(quizId).then( function(quiz) {
      if (quiz) {
         req.quiz = quiz;
         next();
      } else {
         next( new Error('No existe quizId=' + quizId) );
      }
   }).catch( function(error) { next(error); });
};

// GET /quizes
exports.question = function(req, res) {
   var opciones = {}:
   if (req.query.search) {
      opciones = { where: [ "pregunta like ?", '%'+req.query.search.replace(/ +/,"%" ]};
   }
   models.Quiz.findAll(opciones).then( function(quiz) {
      res.render('quizes/index', { quizes: quizes });
   }).catch( function(error) { next(error); });
};

// GET /quizes/:id
exports.question = function(req, res) {
   res.render('quizes/show', { quiz: quiz });
};

// GET /quizes/:id/answer
exports.answer = function(req, res) {
   var resultado = 'Incorrecto';
   if (req.query.respuesta === res.quiz.respuesta) {
      resultado = 'Correcto';
   }
   res.render('quizes/answer', { quiz: req.quiz, respuesta: resultado });
};

