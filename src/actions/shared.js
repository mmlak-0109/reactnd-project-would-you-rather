import { getInitialData } from '../utils/api';
import { setAuthedUser } from './authedUser';
import { receiveQuestions } from "./questions";
import { receiveUsers } from './users';

const AUTHED_ID = null

export function handleInitialData () {
    return (dispatch) => {
        // dispatch(showLoading())
        return getInitialData()
            .then(({users, questions}) => {
                dispatch(receiveQuestions(questions))
                dispatch(receiveUsers(users))
                dispatch(setAuthedUser(AUTHED_ID))
                // dispatch(hideLoading())
            })
    }
};