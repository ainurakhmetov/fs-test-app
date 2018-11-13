import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import styles from './App.module.css';
import HomePage from './pages/HomePage/HomePage';
import InfoPage from './pages/InfoPage/InfoPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';

class App extends Component {

    render() {

        return (

            <BrowserRouter>
                <Switch>
                    <Route path='/' component={HomePage} exact/>
                    <Route path='/reg' component={RegistrationPage} exact/>
                    <Route path='/info' component={InfoPage} exact/>
                    <Route component={NotFoundPage}/>
                </Switch>
            </BrowserRouter>

        );
    }
}
  
export default App;
