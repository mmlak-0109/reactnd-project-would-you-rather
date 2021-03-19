import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionPreview from './QuestionPreview';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    questionsToggle: 'unanswered'
    };
}

  handleClick = (e) => {    
    e.preventDefault();

    // e.target doesn't work in this case because the event 
    // listener at target is attached to the lowest level <h3>
    // However, the event listener at currentTaget is attached
    // to button.  So "value" will be correctly assigned.
    // https://stackoverflow.com/questions/10086427/what-is-the-exact-difference-between-currenttarget-property-and-target-property
    const questionsToggle = e.currentTarget.value;

    this.setState(() => ({
      questionsToggle
    }))
  }

  handle
  render() {
    const { unansweredQuestionsIds, answeredQuestionsIds } = this.props;
    const { questionsToggle } = this.state;
    
    return (
      <div className='container'>
        <div className='list-container'>
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
              onClick={this.handleClick}
            >
                <h3>Answered Questions</h3>
            </button>
          </div>
          {questionsToggle === 'unanswered'
            ? <ul>
                {unansweredQuestionsIds.map(id => (
                  <li key={id}>
                    <QuestionPreview id={id} toggle={questionsToggle}/>
                  </li>
                ))}
              </ul>
            : <ul>
                {answeredQuestionsIds.map(id => (
                  <li key={id}>
                    <QuestionPreview id={id} toggle={questionsToggle}/>
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