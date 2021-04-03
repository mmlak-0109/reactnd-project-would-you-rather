import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { addAnswerToUser, addQuestionToUser } from "./users";
import { showLoading, hideLoading } from 'react-redux-loading-bar';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_QUESTION_ANSWER = "ADD_QUESTION_ANSWER"

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
};

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  }
};

export function handleAddQuestion(optionOne, optionTwo) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading())

    return saveQuestion({
      optionOneText: optionOne,
      optionTwoText: optionTwo,
      author: authedUser
    })
      .then((question) => {
        dispatch(addQuestion(question));
        dispatch(addQuestionToUser({question, authedUser}))
        dispatch(hideLoading())
      }
    )
  }
}

function addQuestionAnswer({ authedUser, qid, answer }) {
  return {
    type: ADD_QUESTION_ANSWER,
    authedUser,
    qid,
    answer
  }
};

export function handleAddQuestionAnswer(id, option) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading())

    return saveQuestionAnswer({
      authedUser,
      qid: id,
      answer: option
    })
      .then((answerToReturn) => {
        dispatch(addQuestionAnswer(answerToReturn));
        dispatch(addAnswerToUser(answerToReturn))
        dispatch(hideLoading())
      }
    )
  }
}