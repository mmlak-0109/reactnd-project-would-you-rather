import { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { formatQuestionPreview } from "../utils/helpers";


class QuestionPreview extends Component {
  state = {
    isclicked: false
  }

  handleClick = (e) => {
    e.preventDefault();

    this.setState(prevState => ({
      isclicked: !prevState.isclicked
    }))
  }

  render() {
    const { question, toggle} = this.props;
    const { isclicked } = this.state

    if (question === null) {
      return <p>Sorry, this question doesn't exist.</p>
    }

    const { id, name, avatar, title, text } = question;

    if (isclicked) {
      return <Redirect 
                push 
                to={{
                  pathname: `/question/${id}`,
                  state: {toggle}
                }}
              />
    }

    return (
      <div className='question'>
        <img
          className='avatar'
          src={avatar}
          alt='User Avatar'
        />
        <div className='question-info'>
          <h3>{name} asks:</h3>
          <h4>{title}</h4>
          <p>{text}...</p>
          <button className='btn' onClick={this.handleClick}>
            {toggle === 'unanswered'
              ? 'View Question'
              : 'View Results'}
          </button>
        </div>
      </div>
    )
  }
};

function mapStateToProps({ questions, users }, { id }) {
  const question = questions[id];
  const user = users[question.author];
  
  return {
    question: question
      ? formatQuestionPreview(question, user)
      : null
  }
};

export default connect(mapStateToProps)(QuestionPreview);