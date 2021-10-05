import React from 'react';

class SearchBar extends React.Component {

    // constructor option to solve context issue with 'this' keyword
    // constructor() {
    //     super();
    //     this.onFormSubmit = this.onFormSubmit.bind(this);
    // }

    state = {term: ''};

    onFormSubmit = (event) => {

        // to prevent default behaviour of submitting form
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() {
        return(
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Enter a search term :</label>
                        <input type="text" value={this.state.term} onChange={(e) => this.setState({term: e.target.value})}></input>
                    </div>
                </form>
            </div>
        )
    }
};

export default SearchBar;