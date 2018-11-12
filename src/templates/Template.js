import React from 'react';
import Header from '../organisms/header/Header.js';
import Footer from '../organisms/footer/Footer.js';

const Template = ({children}) => (

    <div>
        <Header/>
        {children}
        <Footer/>
    </div>

);

export default Template;