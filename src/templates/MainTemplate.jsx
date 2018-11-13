import React from 'react';
import Header from '../organisms/Header/Header.jsx';
import Footer from '../organisms/Footer/Footer.jsx';

const MainTemplate = ({children}) => (

    <div>
        <Header/>
        {children}
        <Footer/>
    </div>

);

export default MainTemplate;