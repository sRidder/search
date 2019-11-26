import React from 'react'
import {
    Provider,
    createStoreHook,
    createDispatchHook,
    createSelectorHook
} from 'react-redux'
import store from './app.store';

export const AppContext = React.createContext(null);

// Export your custom hooks if you wish to use them in other files.
export const useStore = createStoreHook(AppContext);
export const useDispatch = createDispatchHook(AppContext);
export const useSelector = createSelectorHook(AppContext);



export function AppProvider({ children }) {
    return (
        <Provider context={AppContext} store={store}>
            {children}
        </Provider>
    )
}