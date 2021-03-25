import { Component } from "react";
import { FaUserCircle } from "react-icons/fa";
import { connect } from "react-redux";
import { formatResults } from "../utils/helpers";


class Results extends Component {
  render() {
    const { 
      id, 
      name, 
      avatar, 
      title, 
      optionOneText, 
      optionTwoText, 
      optionOneVotes, 
      optionTwoVotes
    } = this.props.question;

    const optionOneVotesLen = optionOneVotes.length;
    const optionTwoVotesLen = optionTwoVotes.length;
    const totalVotes = optionOneVotesLen + optionTwoVotesLen;
    const optionOneVotesPct = (optionOneVotesLen/totalVotes)*100;
    const optionTwoVotesPct = (optionTwoVotesLen/totalVotes)*100;

    const barContainer = {
      height: '100%',
      width: '100%',
      backgroundColor: '#e0e0de',
      borderRadius: 50,
    }
    
    const optionOneBar = {
      height: '100%',
      width: `${optionOneVotesPct}%`,
      backgroundColor: '#00b5d6',
      borderRadius: 'inherit',
      textAlign: 'right'
    }

    const optionTwoBar = {
      height: '100%',
      width: `${optionTwoVotesPct}%`,
      backgroundColor: '#00b5d6',
      borderRadius: 'inherit',
      textAlign: 'right'
    }

    return (
      <div className='results-container'>
        <h2 className='center'>Results:</h2>
        <div className='question'>
          {/* <img
            className='avatar'
            src={avatar}
            alt='User Avatar'
            width='50%'
          /> */}
            <FaUserCircle size='10em' />
          <div className="results">
            <div className='question-info'>
              <h3>{name} asked:</h3>
              <div>
                <p>{title} {optionOneText}?</p>
                <div style={barContainer}>
                  <div style={optionOneBar}>
                    <span>{`${optionOneVotesPct}%`}</span>
                  </div>
                </div>
                <p className='center'>{optionOneVotesLen} out of {totalVotes} Votes</p>
              </div>
            </div>
            <div className='question-info'>
              <div>
                <p>{title} {optionTwoText}?</p>
                <div style={barContainer}>
                  <div style={optionTwoBar}>
                    <span>{`${optionTwoVotesPct}%`}</span>
                  </div>
                </div>
                <p className='center'>{optionOneVotesLen} out of {totalVotes} Votes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ users, authedUser }, { questionInfo }) {
  const user = users[questionInfo.author];

  return {
    authedUser,
    question: formatResults(questionInfo, user)
  }
}

export default connect(mapStateToProps)(Results)