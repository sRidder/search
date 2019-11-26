import {
    FETCH_USER_LIST_SUCCESS,
    FETCH_USER_LIST_ERROR,
    FETCH_USER_LIST_BEGIN
} from './userList.actions';
import {USER_LIST_INITIAL_STATE} from "./userList.state";

export default function userListReducer(state =  USER_LIST_INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_USER_LIST_BEGIN:
            return handleUserListFetchBegin(state);
        case FETCH_USER_LIST_SUCCESS:
            return handleUserListFetchSuccess(state, action.payload);
        case FETCH_USER_LIST_ERROR:
            return handleUserListFetchError(state, action.payload);
        default: {
            return {
                ...state
            };
        }
    }
}

function handleUserListFetchBegin(state) {
    return {
        ...state,
        fetchStatus: 'loading',
        error: {}
    };
}

function handleUserListFetchSuccess(state, payload) {

    return {
        ...state,
        fetchStatus: 'loaded',
        error: {},
        entities: {
            users: payload.userList
        }
    };
}

function handleUserListFetchError(state, payload) {
    return {
        ...state,
        fetchStatus: 'failed',
        error: payload.error,
    };
}