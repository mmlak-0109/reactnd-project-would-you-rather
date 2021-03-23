import { Component } from "react";
import { FaUserCircle } from "react-icons/fa";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/helpers";


class Question extends Component {
  state = {
    selected: ""
  }

  handleChange = (e) => {
    e.preventDefault();

    this.setState({
      selected: e.target.value
    });
  }

  render() {
    const { id, name, avatar, title, optionOneText, optionTwoText} = this.props.question;
    const { selected } = this.state;

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
                value={optionOneText}
                checked={selected === {optionOneText}}
                onChange={this.handleChange}/>
              {optionOneText}
            </label>
            <label className='radio-buttons'>
              <input 
                type='radio' 
                value={optionTwoText}
                checked={selected === {optionTwoText}}
                onChange={this.handleChange}/>
              {optionTwoText}
            </label>
          </div>
          <button className='btn' onClick={this.handleClick}>
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