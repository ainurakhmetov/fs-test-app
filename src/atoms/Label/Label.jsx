/* eslint-disable jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for */
import React from 'react';
import styles from './Label.module.css';

const Label = (htmlFor, ...props) => (
  <label
    htmlFor={htmlFor}
    className={styles.label}
    {...props}
  />
);

export default Label;
