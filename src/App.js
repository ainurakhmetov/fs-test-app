import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import styles from './App.module.css';
import HomePage from './pages/homepage/HomePage';
import InfoPage from './pages/infopage/InfoPage';
import NotFoundPage from './pages/notfoundpage/NotFoundPage';

class App extends Component {

    render() {

        return (

            <BrowserRouter>
                <Switch>
                    <Route path='/' component={HomePage} exact/>
                    <Route path='/info' component={InfoPage} exact/>
                    <Route component={NotFoundPage}/>
                </Switch>
            </BrowserRouter>

        );
    }
}
  
export default App;
