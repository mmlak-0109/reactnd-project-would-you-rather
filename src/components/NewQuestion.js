import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";


class NewQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: '',
  }

  handleChange = (e) => {
    e.preventDefault()

    const value = e.target.value;
    const name = e.target.name;

    if (name === 'optionOne') {
      this.setState(() => ({
        optionOne: value
      }))
    } else {
      this.setState(() => ({
        optionTwo: value
      }))
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { optionOne, optionTwo } = this.state
    const { dispatch, history } = this.props

    dispatch(handleAddQuestion(optionOne, optionTwo))

    this.setState(() => ({
      optionOne: '',
      optionTwo: '',
      toHome: true
    }))

    history.push('/')
  }

  render() {
    const { optionOne, optionTwo } = this.state

    return (
      <div className='container'>
        <div 
          className='new-question-top center'
          id='header'>
          <h2>Create New Question</h2>
        </div>
        <div className='new-question-bottom'>
          <p>Complete the question</p>
          <h4>Would you rather...</h4>
          <input 
            className='input'
            placeholder='Enter Option One Text Here'
            value={optionOne}
            name='optionOne'
            onChange={this.handleChange} />
          <h4 className='center'>OR</h4>
          <input 
            className='input'
            placeholder='Enter Option Two Text Here'
            value={optionTwo}
            name='optionTwo'
            onChange={this.handleChange} />
          <button 
            className='btn'
            onClick={this.handleSubmit}
            disabled={optionOne === '' || optionTwo === ''}
          >
            Submit
          </button>
        </div>
      </div>

    )
  }
}

export default connect()(NewQuestion)