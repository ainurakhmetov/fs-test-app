import React from 'react';
import MainTemplate from '../../templates/MainTemplate.jsx';
import About from "../../molecules/About/About.jsx";
import styles from "./InfoPage.module.css";

const InfoPage = () => (

    <MainTemplate>
        <main className={styles.main}>
        <About/>
        </main>
    </MainTemplate>

);

export default InfoPage;
