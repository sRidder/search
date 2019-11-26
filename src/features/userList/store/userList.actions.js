export const FETCH_USER_LIST_BEGIN   = 'FETCH_USER_LIST_BEGIN';
export const FETCH_USER_LIST_SUCCESS = 'FETCH_USER_LIST_SUCCESS';
export const FETCH_USER_LIST_ERROR = 'FETCH_USER_LIST_ERROR';

export const fetchUserListBegin = () => ({
    type: FETCH_USER_LIST_BEGIN
});

export const fetchUserListSuccess = userList => ({
    type: FETCH_USER_LIST_SUCCESS,
    payload:  {userList}
});

export const fetchUserListError = error => ({
    type: FETCH_USER_LIST_ERROR,
    payload: { error }
});





