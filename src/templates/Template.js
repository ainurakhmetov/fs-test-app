import React from 'react';
import Header from '../organisms/header/Header.js';
import Footer from '../organisms/footer/Footer.js';

const Template = ({children}) => (

    <div>
        <Header></Header>
        {children}
        <Footer></Footer>
    </div>

);

export default Template;