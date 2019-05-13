import React, { Component } from 'react';
import './App.css';
import Home from './Home/Home';
const { whyDidYouUpdate } = require('why-did-you-update');
whyDidYouUpdate(React);
class App extends Component {
    render() {
        return (
            <div className="App">
                <Home />
            </div>
        );
    }
}

export default App;
