import { Component } from "react";
import { FaTrophy } from "react-icons/fa";
import { connect } from "react-redux";

const trophyColors = ['gold', 'silver', '#CD7F32'];

class LeaderboardStats extends Component {
  render() {
    const { name, avatarURL, anwsersTotal, questionsTotal, totalScore } = this.props.userData;
    const idx = this.props.rankId;

    return (
      <div className='leaderboard'>
        <img
          className='avatar'
          src={avatarURL}
          alt='User Avatar'
        />
        <div className='vl'>
          <div className='leaderboard-info'>
            <h3>{name}</h3>
            <p>Questions Answered: <span>{anwsersTotal}</span></p>
            <p>Questions Created: <span>{questionsTotal}</span></p>
          </div>
        </div>
        <div className='trophy'>
          <FaTrophy size='3em' color={trophyColors[idx]} />
        </div>
        <div className='vl'>
          <div className='leaderboard-score'>
            <h4>Score</h4>
            <span id='blue-circle'>{totalScore}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(LeaderboardStats)