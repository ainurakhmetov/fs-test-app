import React from 'react';
import styles from './HomePage.module.css';
import NewsForm from '../../organisms/NewsForm.jsx'
import MainTemplate from '../../templates/MainTemplate.jsx';

const HomePage = () => (

            <MainTemplate>
                <main className={styles.main}>
                    <NewsForm></NewsForm>
                </main>
            </MainTemplate>

    );

export default HomePage;
