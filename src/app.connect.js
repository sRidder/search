import {connect} from 'react-redux'
import { AppContext } from './app.store.provider'

function connectExtended (
    mapStateToProps,
    mapDispatchToProps,
    mergeProps,
    options = {}
) {
    options.storeKey = AppContext;
    return connect(
        mapStateToProps,
        mapDispatchToProps,
        mergeProps,
        options
    )
}

export {connectExtended as connect}