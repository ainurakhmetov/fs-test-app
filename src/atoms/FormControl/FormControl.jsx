import React from 'react';
import PropTypes from 'prop-types';
import styles from './FormControl.module.css';

const FormControl = (props) => {
  const { children } = props;
  return (
    <section className={styles.form}>
      {children}
    </section>
  );
};

FormControl.propTypes = {
  children: PropTypes.string.isRequired,
};

export default FormControl;
