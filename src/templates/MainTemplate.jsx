import React from 'react';
import Header from '../organisms/Header/Header';
import Footer from '../organisms/Footer/Footer';

const MainTemplate = ({ children }) => (

  <div>
    <Header />
    {children}
    <Footer />
  </div>

);

export default MainTemplate;
