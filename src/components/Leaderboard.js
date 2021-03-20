import React, { Component } from "react";
import { connect } from "react-redux";
import LeaderboardStats from "./LeaderboardStats";


class Leaderboard extends Component {
  render() {
    const { leaderboardData } = this.props;

    return (
      <div className='container'>
        <ul className='list-container'>
          {leaderboardData.map((user, idx) => (
            <li key={user.id}>
              <LeaderboardStats userData={user} rankId={idx} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  const leaderboardData = Object.values(users)
    .map(user => ({
      id: user.id,
      name: user.name,
      avatarURL: user.avatarURL,
      anwsersTotal: Object.keys(user.answers).length,
      questionsTotal: user.questions.length,
      get totalScore() {
        return this.anwsersTotal + this.questionsTotal
      }
    }))
    .sort((a,b) => b.totalScore - a.totalScore)
    .slice(0, 3)

  return{
    leaderboardData
  }
}

export default connect(mapStateToProps)(Leaderboard)