import { createSelector } from 'reselect'

export const getUserListState = state => state.userList;
export const getSearch = state => state.search;

export const getSearchInput = createSelector(getSearch, search => search.input);



export const getUserListEntities = createSelector(getUserListState, userListState => userListState.entities);

export const getUsers = createSelector(getUserListEntities, entities => entities.users);

export const getFilteredUsers = createSelector(getUsers, getSearchInput, (users, input) => {
    let filteredUsers = users.filter(user => user.name.toLowerCase().startsWith(input.toLowerCase()));
    return filteredUsers;
});

export const getUserListFetchStatus = createSelector(getUserListState, userListState => userListState.fetchStatus);


