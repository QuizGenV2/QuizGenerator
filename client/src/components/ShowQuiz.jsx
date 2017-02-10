import React from 'react';
import { Link } from 'react-router';

const ShowQuiz = (props) => {
  console.log(props.params.id);
  const quiz = props.quizzes.find(quiz => quiz.id === Number(props.params.id));

  return (
    <div>
      <h2>Show quiz info here</h2>
      {quiz && quiz.name} <br />
      {quiz && quiz.description}
    </div>
  );
}

export default ShowQuiz;
