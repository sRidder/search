import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

/**
 * Initial State
 */
import { USER_LIST_INITIAL_STATE } from './features/userList/store/userList.state';
import { SEARCH_INITIAL_STATE } from "./features/search/store/search.state";


// reducer
import userListReducer from './features/userList/store/userList.reducer';
import searchReducer from './features/search/store/search.reducer'


// epics
import {
    userListFetchEpic,
} from './features/userList/store/userList.epic';

import {
    searchInputEpic
} from './features/search/store/search.epic'



const reduxDevtoolsExtensionOptions = {
};

const composeEnhancers = composeWithDevTools(reduxDevtoolsExtensionOptions);


const epicMiddleware = createEpicMiddleware();


/**
 * Epics (Async handling with redux-observables and RxJS)
 */
export const ROOT_EPIC = combineEpics(
    userListFetchEpic,
    searchInputEpic
);

const INITIAL_STATE = {
    userList: USER_LIST_INITIAL_STATE,
    search: SEARCH_INITIAL_STATE
};

const ROOT_REDUCER = combineReducers({
    userList: userListReducer,
    search: searchReducer
});

const store = createStore(
    ROOT_REDUCER,
    INITIAL_STATE,
    composeEnhancers(
        applyMiddleware(epicMiddleware)
    )

);

/**
 * Inject the middleware epics
 */
epicMiddleware.run(ROOT_EPIC);


// Export store a singleton
export default store;