import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Pagination.module.css';

const Pagination = (props) => {
  const { totalPage } = props;
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPage / 20); i += 1) {
    pageNumbers.push(i);
  }
  const renderPageNumbers = pageNumbers.map(number => (
    <li
      key={number}
      id={number}
    >
      <Link
        to={`/characters/?page=${number}`}
        className={styles.link}
      >
        {number}
      </Link>
    </li>));
  return (
    <ul className={styles.paginate}>
      {renderPageNumbers}
    </ul>
  );
};

Pagination.propTypes = {
  totalPage: PropTypes.number.isRequired,
};

export default Pagination;
