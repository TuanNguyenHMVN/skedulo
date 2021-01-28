import React, { Component } from 'react';

class SearchBox extends Component {
    constructor() {
        super();
        this.state = {
            value: '',
            searchFunc: null,
        };
    }
    render() {
        return (
            <div className='row mb-2'>
                <div className='col-12 text-left'>
                    <input
                        className='form-control'
                        type='text'
                        placeholder='search'
                        value={this.state.value}
                        onChange={(event) => this.onSearch(event)}
                    />
                </div>
            </div>
        );
    }
    onSearch(event) {
        const text = event.target.value;
        this.setState({
            value: text,
        });
        if (text.length > 2) {
            clearTimeout(this.state.searchFunc);
            this.setState({
                searchFunc: setTimeout(() => {
                    this.props.onSearch(text);
                }, 500),
            });
        }
    }
}

export default SearchBox;
