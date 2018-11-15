import React, { Component } from 'react';
import { MapDisplay } from '../MapDisplay/MapDisplay';
import axios from 'axios';

class Home extends Component {
    state = {
        payload: {}
    };

    componentDidMount() {
        this.fetchItems('http://localhost:7000/api/video');
    }

    fetchItems = apiLink => {
        axios.get(apiLink).then(result => {
            console.log(result.data);
            this.setState({
                payload: result.data
            });
            console.log(this.state.payload);
        });
    };
    render() {
        return (
            <div>
                <MapDisplay data={this.state.payload} />
            </div>
        );
    }
}

export default Home;
