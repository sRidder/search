import {
    SEARCH_UPDATE
} from './search.actions';
import {SEARCH_INITIAL_STATE} from "./search.state";

export default function searchReducer(state =  SEARCH_INITIAL_STATE, action) {
    switch(action.type) {
        case SEARCH_UPDATE:
            return handleSearchUpdate(state, action.payload);
        default: {
            return {
                ...state
            };
        }
    }
}

function handleSearchUpdate(state, payload) {
    console.log(payload);
    return {
        input: payload
    };
}