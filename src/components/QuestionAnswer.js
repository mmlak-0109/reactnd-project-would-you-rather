import { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";
import Results from "./Results";
import { Redirect } from "react-router";


class QuestionAnswer extends Component {
  render() {
    const { question, questionAnswered } = this.props;

    if (this.props.location.state === undefined
        || question === undefined) {
      return <Redirect push to='/no-match' />
    }
    
    return (
      <div>
        {questionAnswered
          ? <Results questionInfo={question}/>
          : <Question questionInfo={question}/>}
      </div>
    )
  }
}

function mapStateToProps({ users, questions, authedUser }, props) {
  const { id } = props.match.params;
  const question = questions[id];
  const questionAnswered = Object.keys(users[authedUser].answers).includes(id)

  return{
    question,
    questionAnswered
  }
}

export default connect(mapStateToProps)(QuestionAnswer)