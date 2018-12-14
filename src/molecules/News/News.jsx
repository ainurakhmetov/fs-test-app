import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../atoms/Button/Button';
import styles from './News.module.css';

const News = (props) => {
  const {
    title, text,
  } = props;
  return (
    <div className={styles.form}>
      <div className={styles.color} />
      <div className={styles.textBlock}>
        <h3 className={styles.title}>{title}</h3>
        <p>{text}</p>
        <Button styled={styles.button}> next </Button>
      </div>
    </div>
  );
};

News.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default News;
