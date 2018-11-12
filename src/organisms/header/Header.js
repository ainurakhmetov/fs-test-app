import React from 'react';
import styles from './Header.module.css';
import logo from './logo.jpg';
import {Link} from 'react-router-dom';


const Header = () => (

    <header className = {styles.header}>
        <div className= {styles.mainNavigation}>
            <Link to="/">
                <img className= {styles.logo} src={logo} alt="logo"/>
            </Link>
            <ul className= {styles.navigationList}>
                <li><Link className={styles.navigationItem} to="">News</Link></li>
                <li><Link className={styles.navigationItem} to="/prods">Producers</Link></li>
                <li><Link className={styles.navigationItem} to="/video">Video</Link></li>
                <li><Link className={styles.navigationItem} to="/info">About</Link></li>
            </ul>
        </div>
    </header>
    );

export default Header;