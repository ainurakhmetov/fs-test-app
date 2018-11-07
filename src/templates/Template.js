import React from 'react';
import Header from '../organisms/Header.js';
import Footer from '../organisms/Footer.js';

const Template = ({children}) => (

    <div>
        <Header></Header>
        {children}
        <Footer></Footer>
    </div>

);

export default Template;