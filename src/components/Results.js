import { Component } from "react";
import { FaCheck } from "react-icons/fa";
import { connect } from "react-redux";
import { formatResults } from "../utils/helpers";


class Results extends Component {
  render() {
    const { 
      name, 
      avatar, 
      title, 
      optionOneText, 
      optionTwoText, 
      optionOneVotes, 
      optionTwoVotes
    } = this.props.question;

    const authedUser = this.props.authedUser;

    const optionOneVotesLen = optionOneVotes.length;
    const optionTwoVotesLen = optionTwoVotes.length;
    const totalVotes = optionOneVotesLen + optionTwoVotesLen;
    const optionOneVotesPct = Math.round((optionOneVotesLen/totalVotes)*100);
    const optionTwoVotesPct = Math.round((optionTwoVotesLen/totalVotes)*100);

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

    const optionsObject = {
      'optionOne': { 
        text: optionOneText, 
        bar: optionOneBar,
        pct: optionOneVotesPct,
        length: optionOneVotesLen,
        votes: optionOneVotes
      },
      'optionTwo': { 
        text: optionTwoText, 
        bar: optionTwoBar,
        pct: optionTwoVotesPct,
        length: optionTwoVotesLen,
        votes: optionTwoVotes
      }
    }

    const optionsList = ['optionOne', 'optionTwo']

    const avatarSlash = `/${avatar}`;

    return (
      <div className='container'>
        <div className='results'>
          <img
            className='avatar'
            src={avatarSlash}
            alt='User Avatar'
          />
          <div className='results-info-parent center'>
            <h3>{name} asked:</h3>
            <ul>
              {optionsList.map(option => (
                <li key={option}>
                  <div className='results-info'>
                    <div>
                      {optionsObject[option].votes.includes(authedUser)
                          ? <div className='your-selection'>
                              <FaCheck /> Your Selection
                            </div>
                          : null
                        }
                      <p>{title} {optionsObject[option].text}?</p>
                      <div style={barContainer}>
                        <div style={optionsObject[option].bar}>
                          <span>{`${optionsObject[option].pct}%`}</span>
                        </div>
                      </div>
                      <p className='center'>{optionsObject[option].length} out of {totalVotes} Votes</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
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