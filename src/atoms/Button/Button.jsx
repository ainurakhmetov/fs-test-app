import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { styled, children } = props;
  return (
    <button type="button" className={styled}>
      {children}
    </button>
  );
};

Button.propTypes = {
  styled: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Button;
