import React from 'react';
import NewsForm from '../../organisms/NewsForm';
import MainTemplate from '../../templates/MainTemplate';
import styles from './HomePage.module.css';

const HomePage = () => (

  <MainTemplate>
    <main className={styles.main}>
      <NewsForm />
    </main>
  </MainTemplate>

);

export default HomePage;
