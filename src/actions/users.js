export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_ANSWER_TO_USER = 'ADD_ANSWER_TO_USER';
export const ADD_QUESTION_TO_USER = 'ADD_QUESTION_TO_USER'

export function receiveUsers (users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}

export function addQuestionToUser ({ question, authedUser }) {
    return {
        type: ADD_QUESTION_TO_USER,
        id: question.id,
        authedUser
    }
}

export function addAnswerToUser ({ authedUser, qid, answer }) {
    console.log({ authedUser, qid, answer })
    return {
        type: ADD_ANSWER_TO_USER,
        qid,
        answer,
        authedUser
    }
}