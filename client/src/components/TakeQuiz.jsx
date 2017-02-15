import React from 'react';
import { Link } from 'react-router';
import ShowQuestion from './ShowQuestion.jsx';

class TakeQuiz extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quiz: {
        questions: []
      },
      
    };
  };

  componentDidMount() {
    fetch(`/${this.props.params.id}`)
      .then((response) => {
        return response.json();
      })
      .then((quiz) => {
        console.log(quiz)
        this.setState({ quiz });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const showQuestionArr = this.state.quiz.questions.map((q, i) => {
      return (
        <ShowQuestion
          key={q.id}
          question={q.question}
          answers={q.answers}
        />
      );
    });

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <h2>{this.state.quiz.name}</h2>
            <h5>{this.state.quiz.description}</h5>
            {/*we want to render all the questions here*/}
            <hr/>
            {showQuestionArr}
          </div>
        </div>
      </div>
    );
  }
}

export default TakeQuiz; 