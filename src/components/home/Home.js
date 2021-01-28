import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UserTable } from '../index';

import { ACTIONS } from '../../store/actions/actions';

class Home extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col-12'>
                    <UserTable
                        key={this.props.userList.length}
                        title='User Management'
                        userList={this.props.userList}
                        isLoading={this.props.loading}
                        onSearch={(text) => this.onSearch(text)}
                    ></UserTable>
                </div>
            </div>
        );
    }
    onSearch(text) {
        this.props.clearUserList();
        this.props.getUserList(text);
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        success: state.success,
        error: state.error,
        userList: state.userList,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUserList: (keyword) =>
            dispatch({
                type: ACTIONS.GET_USER_LIST,
                keyword,
            }),
        clearUserList: () =>
            dispatch({
                type: ACTIONS.CLEAR_USER_LIST,
            }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
