import React, { Component } from 'react';

import styles from './App.module.css';
import Homepage from './pages/Homepage';
class App extends Component {

    render() {

        return (
            <Homepage className={styles.body}></Homepage>
        );
    }
}
  
export default App;
