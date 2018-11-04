import React, { Component } from 'react';

import './App.module.css';
import Header from './templates/Header';
import Homepage from './pages/Homepage';
import Footer from './templates/Footer';

class App extends Component {


    render() {

        return (

            <div className="App">
                <Header />
                <Homepage />
                <Footer />
            </div>
        );
    }
}
  
export default App;
