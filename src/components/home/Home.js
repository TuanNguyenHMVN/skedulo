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

    componentDidMount() {
        const newArr = [];
        let unavailableItems = [
            { startPx: 10, endPx: 30 },
            { startPx: 55, endPx: 65 },
            { startPx: 35, endPx: 50 },
            { startPx: 20, endPx: 40 },
            { startPx: 60, endPx: 70 },
        ];
        const sorted = [
            ...unavailableItems.sort((a, b) => a.startPx - b.startPx),
        ];
        let overlapIndex = null;
        sorted.map((line, index) => {
            if (index !== overlapIndex) {
                overlapIndex = sorted.findIndex(
                    (item) =>
                        (item.startPx > line.startPx &&
                            item.startPx < line.endPx) ||
                        (line.endPx < item.endPx && line.endPx > item.startPx)
                );
                if (overlapIndex > -1) {
                    const newLine = {
                        startPx: line.startPx,
                        endPx:
                            line.endPx > sorted[overlapIndex].endPx
                                ? line.endPx
                                : sorted[overlapIndex].endPx,
                    };
                    newArr.push(newLine);
                } else {
                    newArr.push(line);
                }
            }
            console.log('EEEEE', newArr);
            console.log('DDDDD', sorted[overlapIndex]);

            return line;
        });

        // sorted.reduce((acc, curr, currIndex) => {
        //     console.log('AAAAAAAAAAAA', curr);
        //     console.log('bbbbbbb', currIndex);
        //     if (acc && acc.startPx) {
        //         console.log('ccc', curr);
        //         unavailableItems.splice(0, 1);
        //     } else {
        //     }
        // });
        // unavailableItems.map((p, i) => {
        //     unavailableItems.splice(i, 1);

        //     console.log('aaaaaaaaaaaaa', unavailableItems);
        //     return p;
        // });
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
