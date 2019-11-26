import { ofType } from 'redux-observable';
import { map} from 'rxjs/operators';

/**
 * Store specific files
 */
import * as Actions from "./search.actions";



export const searchInputEpic = (action$, state$) =>
    action$.pipe(
        ofType(Actions.SEARCH_INPUT),
        map(({data}) => {
            console.log(data.value);
            return Actions.searchUpdate(data.value);
        })

    )
;
