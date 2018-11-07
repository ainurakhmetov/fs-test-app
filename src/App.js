import React, { Component } from 'react';

import './App.module.css';
import Homepage from './pages/Homepage';
class App extends Component {


    render() {

        return(
            <div className="App">
                <Homepage />
            </div>
        );
    }
}
  
export default App;
