import React from 'react';
import PropTypes from 'prop-types';
import Header from '../organisms/Header/Header';
import Footer from '../organisms/Footer/Footer';

const MainTemplate = ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
);

MainTemplate.propTypes = {
  children: PropTypes.object.isRequired,
};
export default MainTemplate;
