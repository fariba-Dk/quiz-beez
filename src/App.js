import questions from './questions.js';
import React, { Component } from 'react';
import './style.css';
import QuestionBox from './component/QuestionBox';
import Result from './component/Result';
// import Counter from './component/Counter'
import Players from "./component/Players"

/* when we click a button -> we pass our option if it is correct, if correct we increment score by 1*/
class App extends Component {
  //declare state in our component
  state = {
    questionBank: [],
    score: 0,
    response: 0,
  };
  //this invokes the questionBank and gets results
  getQuestions = () => {
    questions().then((question) => {
      this.setState({
        questionBank: question,
      });
    });
  };
  computeAnswer = (answer, correctAnswer) => {
    if (answer === correctAnswer) {
      this.setState({
        score: this.state.score + 1,
      });
    }
    this.setState({
      response: this.state.response + 1,
    });
  };

  playAgain = () => {
    this.getQuestions();

  };
  //load for first time
  componentDidMount = () => {
    this.getQuestions();
  };
  render() {
    return (
      <>
        <Players/>

      <div className='container'>
        <div className='title'>🐝 Quiz-Bee 🐝</div>
        {this.state.questionBank.length > 0 &&
          this.state.questionBank.map(
            ({ question, answers, correct, questionId }) => (
              <QuestionBox
                question={question}
                options={answers}
                key={questionId}
                selected={(answer) => this.computeAnswer(answer, correct)}
              />
            )
          )}
        {this.state.response >= 0 ? (
          <Result
            counter={this.state.response}
            score={this.state.score}
            playAgain={this.playAgain}
          />
        ) : null}

        <div className='footer'>
          <footer>
            <a href='https://www.knowledgehut.com/'>
              ➡️ Credit to: Knowledgehut.com{' '}
            </a>
          </footer>
        </div>
        <div>
          <footer>
            <a href='https://www.youtube.com/watch?v=aq-fCtg_gG4'>
              ➡️ YouTube Video
            </a>
          </footer>
        </div>
      </div>
      </>
    );
  }
}
export default App;
//<Result score={this.state.score} playAgain={this.playAgain} />
