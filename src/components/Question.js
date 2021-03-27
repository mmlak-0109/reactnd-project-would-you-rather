import { Component } from "react";
import { FaUserCircle } from "react-icons/fa";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { handleAddQuestionAnswer } from "../actions/questions";
import { formatQuestion } from "../utils/helpers";


class Question extends Component {
  state = {
    selected: "",
    toHome: false
  }

  handleChange = (e) => {
    this.setState({
      selected: e.currentTarget.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { selected } = this.state
    const { dispatch } = this.props
    const { id, optionOneText } = this.props.question

    const option = selected === optionOneText ? "optionOne" : "optionTwo"

    dispatch(handleAddQuestionAnswer(id, option))

    this.setState(() => ({
      selected: '',
      toHome: true
    }))
  }

  render() {
    const { id, name, avatar, title, optionOneText, optionTwoText} = this.props.question;
    const { selected, toHome } = this.state;

    if (toHome === true) {
      return <Redirect 
                push 
                to={{
                  pathname: `/question/${id}`,
                  state: 'answered'
                }}
              />
    }

    return (
      <div className='question'>
        {/* <img
          className='avatar'
          src={avatar}
          alt='User Avatar'
          width='50%'
        /> */}
          <FaUserCircle size='10em' />
        <div className='question-info'>
          <h3>{name} asks:</h3>
          <h4>{title}</h4>
          <div>
            <label className='radio-buttons'>
              <input 
                type='radio'
                name='choice'
                value={optionOneText}
                onChange={this.handleChange}
              />
              {optionOneText}
            </label>
            <label className='radio-buttons'>
              <input 
                type='radio'
                name='choice' 
                value={optionTwoText}
                onChange={this.handleChange}
              />
              {optionTwoText}
            </label>
          </div>
          <button 
            className='btn'
            onClick={this.handleSubmit}
            disabled={selected === ''}
          >
            Submit
          </button>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ users, authedUser }, { questionInfo }) {
  const user = users[questionInfo.author];

  return {
    authedUser,
    question: formatQuestion(questionInfo, user)
  }
}

export default connect(mapStateToProps)(Question)