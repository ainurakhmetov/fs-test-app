import React, { Component } from 'react';

import './App.module.css';
import Header from './organisms/Header';
import Homepage from './pages/Homepage';
import Footer from './organisms/Footer';

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
