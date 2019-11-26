import { createSelector } from 'reselect'

export const getSearch = state => state.search;

export const getSearchInput = createSelector(getSearch, search => search.input);