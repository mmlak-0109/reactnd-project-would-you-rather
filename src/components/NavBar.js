import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    const { authedUser } = this.props;
    return (
      <nav className='nav'>
        <ul>
          <li>
            <NavLink 
              to={
                authedUser === null
                ? '/sign-in'
                : '/home'}
              activeClassName={
                authedUser === null
                ? ''
                : 'active'}>
                Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to={
                authedUser === null
                ? '/sign-in'
                : '/new-question'}
              activeClassName={
                authedUser === null
                ? ''
                : 'active'}>
                New Question
            </NavLink>
          </li>
          <li>
            <NavLink 
              to={
                authedUser === null
                ? '/sign-in'
                : '/leaderboard'}
              activeClassName={
                authedUser === null
                ? ''
                : 'active'}>
                Leaderboard
            </NavLink>
          </li>
        </ul>
      </nav>
    )
  }
};

function mapStateToProps(state) {
  return {
    authedUser: state.authedUser
  }
}

export default connect(mapStateToProps)(NavBar)