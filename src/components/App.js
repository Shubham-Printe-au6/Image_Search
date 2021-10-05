import React from "react";

import unsplash from '../api/unsplash';
import SearchBar from './SearchBar'
import ImageList  from "./imageList";

class App extends React.Component {

    state = {images: []};

    // binding option
    // constructor() {
    //     super();
    //     this.onSearchSubmit = this.onSearchSubmit.bind(this);
    // }

    // two ways to handle api requests => promise based & async-await
    onSearchSubmit = async (term) => {

        console.log(term);
        const response = await unsplash.get('/search/photos', {
            params: {
                query: term,
                per_page: 40,
            }
        });

        this.setState({images: response.data.results});
    }

    render() {
        return (
            <div>
                <div className="ui container" style={{marginTop: '10px'}}>
                    <SearchBar onSubmit={this.onSearchSubmit} />
                    <ImageList images={this.state.images} />
                </div>
            </div>
        )
    }
    
};

export default App;