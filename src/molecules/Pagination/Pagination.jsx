import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Pagination.module.css';

const Pagination = props => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(props.totalPage / 20); i++) {
    pageNumbers.push(i);
  }
  const renderPageNumbers = pageNumbers.map(number => {
    return (
      <li
        key={number}
        id={number}
        className={styles.hide}
      >
        <Link
          to={`/characters/?page=${number}`}
          className={styles.link}
        >
          {number}
        </Link>
      </li>
    );
  });
  return (
    <ul className={styles.paginate}>
      {renderPageNumbers}
    </ul>
  );
};

export default Pagination;
