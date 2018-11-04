import React from 'react';
import styles from './Header.module.css';
import logo from './logo.jpg';

const Header = () => {

    return (

    <header className = {styles.header}>
        <div className= {styles.mainNavigation}>
            <a className= {styles.logoHeader} href="#">
                <img className= {styles.logo} src={logo} alt="logo"/>
            </a>
            <ul className= {styles.navigationList}>
                <li><a className={styles.navigationItemCurrent} href="#">News</a></li>
                <li><a className={styles.navigationItem} href="#">Music</a></li>
                <li><a className={styles.navigationItem}  href="#">Video</a></li>
                <li><a className={styles.navigationItem}  href="#">About</a></li>
            </ul>
        </div>
    </header>

    )

};

export default Header;