import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from './logo.png';

const Header = () => (

  <header className={styles.header}>
    <div className={styles.mainNavigation}>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="logo" />
      </Link>
      <ul className={styles.navigationList}>
        <li>
          <Link className={styles.navigationItem} to="/">News</Link>
        </li>
        <li>
          <Link className={styles.navigationItem} to="/characters/?page=1">Characters</Link>
        </li>
        <li>
          <Link className={styles.navigationItem} to="/video">Video</Link>
        </li>
        <li>
          <Link className={styles.navigationItem} to="/info">About</Link>
        </li>
        <li>
          <Link className={styles.navigationItem} to="/reg">Registration</Link>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
