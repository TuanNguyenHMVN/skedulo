import React, { Component } from 'react';
import { Avatar, SearchBox } from '../../components';
class UserTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userList: this.props.userList,
            title: this.props.title,
            isLoading: this.props.isLoading,
        };
    }
    render() {
        return (
            <div className='container'>
                <div className='title mb-5'>
                    <h1>{this.state.title}</h1>
                </div>

                <div className='row'>
                    <div className='col-6'>
                        <SearchBox onSearch={(text) => this.onSearch(text)} />
                    </div>

                    {this.state.isLoading ? (
                        <div className='col-12 text-primary text-center'>
                            <div className='spinner-border' role='status'></div>
                        </div>
                    ) : (
                        <div className='col-12'>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th style={{ height: '50px' }}>
                                            Avatar
                                        </th>
                                        <th style={{ height: '50px' }}>
                                            Login
                                        </th>
                                        <th style={{ height: '50px' }}>Type</th>
                                        <th style={{ height: '50px' }}>
                                            Score
                                        </th>
                                    </tr>
                                </thead>
                                {
                                    <tbody>
                                        {this.state.userList.map((user) => (
                                            <tr key={user.id}>
                                                <td key='avatar'>
                                                    <Avatar
                                                        url={user.avatar_url}
                                                    />
                                                </td>
                                                <td key='login'>
                                                    {user.login}
                                                </td>
                                                <td key='type'>{user.type}</td>
                                                <td key='score'>
                                                    {user.score?.toFixed(2) ||
                                                        0}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                }
                            </table>
                        </div>
                    )}
                </div>
            </div>
        );
    }
    onSearch(text) {
        this.props.onSearch(text);
    }
}
export default UserTable;
