import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { formatQuestionPreview } from "../utils/helpers";


class QuestionPreview extends Component {
  render() {
    const { question } = this.props;

    if (question === null) {
      return <p>Sorry, this question doesn't exist.</p>
    }

    const { id, name, avatar, title, text } = question;

    return (
      <div className='question'>
        <img
          className='avatar'
          src={avatar}
          alt='User Avatar'
          width='50%'
        />
        <div className='question-info'>
          <h3>{name} asks:</h3>
          <h4>{title}</h4>
          <p>{text}...</p>
          <button className='btn'>View Question</button>
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