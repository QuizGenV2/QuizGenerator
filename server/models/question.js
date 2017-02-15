const Sequelize = require('sequelize');
const db = require('./db');

const Question = db.define('question', {
  question: {
    type: Sequelize.STRING,
  },
  quizId: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Question;
