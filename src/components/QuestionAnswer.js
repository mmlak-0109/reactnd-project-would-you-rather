import { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";
import Results from "./Results";
import { Redirect } from "react-router";


class QuestionAnswer extends Component {
  render() {
    const { question } = this.props;

    if (this.props.location.state === undefined
        || question === undefined) {
      return <Redirect push to='/no-match' />
    }

    const toggle = this.props.location.state.toggle;

    return (
      <div>
        {toggle === 'unanswered'
          ? <Question questionInfo={question}/>
          : <Results questionInfo={question}/>}
      </div>
    )
  }
}

function mapStateToProps({ questions }, props) {
  const { id } = props.match.params;

  return{
    question: questions[id],
  }
}

export default connect(mapStateToProps)(QuestionAnswer)