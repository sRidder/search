import { ofType } from 'redux-observable';
import { of, from } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

/**
 * Store specific files
 */
import * as Actions from "./userList.actions";

import userListService from '../services/userList.service';

/**
 * Fetch products from API.
 */
export const userListFetchEpic = (action$, state$) =>
    action$
        .pipe(
            ofType(Actions.FETCH_USER_LIST_BEGIN),
            switchMap(() =>
                from(userListService.fetchUserList())
                    .pipe(
                        map(response => Actions.fetchUserListSuccess(response.data)),
                        catchError(e => of(Actions.fetchUserListError(e)))
                    )
            ),
        )
;