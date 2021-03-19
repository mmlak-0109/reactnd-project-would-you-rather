import { Component } from "react";
import { FaUserCircle } from "react-icons/fa";
import { connect } from "react-redux";


class LeaderboardStats extends Component {
  render() {
    const { name, avatarURL, answers, questions } = this.props.user;
    const anwsersTotal = Object.keys(answers).length;
    const questionsTotal = questions.length;
    const totalScore = anwsersTotal + questionsTotal;

    return (
      <div className='question'>
        {/* <img
          className='avatar'
          src={avatarURL}
          alt='User Avatar'
        /> */}
          <FaUserCircle size="10em"/>
        <div className='leaderboard-info vl'>
          <div className='leaderboard-info'>
            <h3>{name}</h3>
            <p>Questions Answered: <span>{anwsersTotal}</span></p>
            <p>Questions Created: <span>{questionsTotal}</span></p>
          </div>
        </div>
        <div className='vl'>
          <div className='leaderboard-info'>
            <h4>Score</h4>
          </div>
          <div className='leaderboard-info'>
            <span id='blue-circle'>{totalScore}</span>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ users }, { id }) {
  return {
    user: users[id]
  }
}

export default connect(mapStateToProps)(LeaderboardStats)