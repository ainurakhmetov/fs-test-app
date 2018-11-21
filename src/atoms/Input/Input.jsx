import React from 'react';
import classNames from 'classnames';
import styles from './Input.module.css';

// const Input = ({ error, ...rest }) => (
//   <input
//     className={classNames(styles.input, styles.error)}
//     {...rest}
//   />
const Input = ({ error, ...rest }) => (
  <input
    className={!error ? styles.input : classNames(styles.input, styles.error)}
    {...rest}
  />
);

export default Input;
