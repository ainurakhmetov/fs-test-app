import React from 'react';
import PropTypes from 'prop-types';

const Loader = (props) => {
  const { styled } = props;
  return (
    <div className={styled}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

Loader.propTypes = {
  styled: PropTypes.string.isRequired,
};

export default Loader;
