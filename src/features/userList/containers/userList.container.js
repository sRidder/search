import React, {Component} from 'react';
import * as fromUserListData from "../store/userList.selectors";
import * as Actions from "../store/userList.actions";
import { connect } from 'react-redux';
import {AppContext} from "../../../app.store.provider";
import UserList from "../../../components/userList/userList"


function mapStateToProps(state) {
    return {
        users: fromUserListData.getFilteredUsers(state),
    };
}

const fetchUserList = () => ({ type: Actions.FETCH_USER_LIST_BEGIN });


function mapDispatchToProps(dispatch) {
    return {
        fetchUserList: () => dispatch(fetchUserList())
    }
};

class UserListContainer extends Component {

    componentDidMount() {
        this.props.fetchUserList();
    }



    render() {
        const { users } = this.props;

        return (
            <UserList users={users}/>
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps, null, { context: AppContext })(UserListContainer);