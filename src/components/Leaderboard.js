import React, { Component } from "react";
import { connect } from "react-redux";
import LeaderboardStats from "./LeaderboardStats";


class Leaderboard extends Component {
  render() {
    const { usersIds } = this.props;

    return (
      <div className='container'>
        <ul className='list-container'>
          {usersIds.map((userId) => (
            <li key={userId}>
              <LeaderboardStats id={userId} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  return{
    usersIds: Object.keys(users)
  }
}
export default connect(mapStateToProps)(Leaderboard)