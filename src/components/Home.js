import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionPreview from './QuestionPreview';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    questionsToggle: 'unanswered'
    };
    this.handleClick = this.handleClick.bind(this);
}

  handleClick = (e) => {    
    const questionsToggle = e.target.value;

    this.setState(() => ({
      questionsToggle
    }))
  }

  handle
  render() {
    const { unansweredQuestionsIds, answeredQuestionsIds } = this.props;
    const { questionsToggle } = this.state;
    console.log(questionsToggle)
    
    return (
      <div>
        <div className='questions-list'>
          <div className='questions-toggle'>
            <button
              className='questions-toggle-btn'
              type='button'
              value='unanswered'
              disabled={questionsToggle === 'unanswered'}
              onClick={this.handleClick}
            >
              <h3>Unanswered Questions</h3>
            </button>
            <button
              className='questions-toggle-btn'
              type='button'
              value='answered'
              disabled={questionsToggle === 'answered'}
              onClickCapture={this.handleClick}
            >
                <h3>Answered Questions</h3>
            </button>
          </div>
          {questionsToggle === 'unanswered'
            ? <ul>
                {unansweredQuestionsIds.map(id => (
                  <li key={id}>
                    <QuestionPreview id={id}/>
                  </li>
                ))}
              </ul>
            : <ul>
                {answeredQuestionsIds.map(id => (
                  <li key={id}>
                    <QuestionPreview id={id}/>
                  </li>
                ))}
              </ul>
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps({ questions, users, authedUser }) {
  const authedUserInfo = users[authedUser];
  const questionsSorted = Object.keys(questions)
    .sort((a,b) => questions[b].timestamp - questions[a].timestamp);
  
    return {
    answeredQuestionsIds: questionsSorted
      .filter(question => question in authedUserInfo.answers),
    unansweredQuestionsIds: questionsSorted
      .filter(question => !(question in authedUserInfo.answers)),
  }
}

export default connect(mapStateToProps)(Home)