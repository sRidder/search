import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "../../../app.store.provider";
import * as Actions from "../store/search.actions";
import * as fromSearchData from "../store/search.selectors";
import { Input } from 'semantic-ui-react'

export const SearchContainer = () => {
    const searchInput = useSelector(state => fromSearchData.getSearchInput(state));
    const [inputValue, setInputValue] = useState(searchInput);
    const dispatch = useDispatch();

    useEffect(() => {
        function update() {
            setInputValue(searchInput);
        }
        update();
    }, [inputValue, searchInput]);


    const onHandleChange = (event) => {
        event.persist();
        const data = { value: event.currentTarget.value };

        dispatch({
            type: Actions.SEARCH_INPUT,
            data
        });
    };

    return (
        <div className="search-wrapper">
            <form>
                <Input placeholder='Search...' type={'text'} value={searchInput} onChange={onHandleChange} />
            </form>
        </div>
    );
}