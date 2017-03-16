import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = { term: ''};
    }

    onInputChange(e) {
        this.setState({ term: e.target.value });
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit.bind(this)}
                  className="input-group">
                <input
                    placeholder="Get a five-day forecast"
                    className="form-control"
                    onChange={this.onInputChange.bind(this)}
                    value={this.state.term} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">
                        submit
                    </button>
                </span>
            </form>
        )
    }
}
