import React from 'react';
import styles from './NotFoundPage.module.css'
import Button from "../../atoms/button/Button";
import {Link} from 'react-router-dom';

const NotFoundPage = () => (

    <main className={styles.main}>
        <h3 className={styles.text}>
            404<br/>not found
        </h3>
        <Link to="/">
            <Button styled={styles.button}>Take me back to homepage</Button>
        </Link>
    </main>
);

export default NotFoundPage;