import React from 'react';
import Template from '../../templates/Template.js';
import About from "../../molecules/about/About";
import styles from "../infopage/InfoPage.module.css";

const InfoPage = () => (

    <Template>
        <main className={styles.main}>
        <About/>
        </main>
    </Template>

);

export default InfoPage;