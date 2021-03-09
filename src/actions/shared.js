import { getInitialData } from '../utils/api';
import { receiveQuestions } from "./questions";
import { receiveUsers } from './users';

// const AUTHED_ID = 'tylermcginnis'

export function handleInitialData () {
    return (dispatch) => {
        // dispatch(showLoading())
        return getInitialData()
            .then(({users, tweets}) => {
                dispatch(receiveQuestions(tweets))
                dispatch(receiveUsers(users))
                // dispatch(setAuthedUser(AUTHED_ID))
                // dispatch(hideLoading())
            })
    }
};