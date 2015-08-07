// Proyecto: Quiz
// URL: https://quiz2015dfmarin.herokuapp.com
// GIT: https://github.com/dfmarin/quiz
// Autor: dfmarin@gmail.com

// Definicion del modelo de Quiz

module.exports = function(sequelize, DataTypes) {
   return sequelize.define('Quiz',
      { pregunta:  DataType.STRING,
        respuesta: DataType.STRING,
      });
}

