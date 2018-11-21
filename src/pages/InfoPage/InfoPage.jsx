import React from 'react';
import MainTemplate from '../../templates/MainTemplate';
import About from '../../molecules/About/About';
import styles from './InfoPage.module.css';

const InfoPage = () => (

  <MainTemplate>
    <main className={styles.main}>
      <About />
    </main>
  </MainTemplate>

);

export default InfoPage;
