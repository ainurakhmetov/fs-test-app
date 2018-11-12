import React from 'react';
import styles from './HomePage.module.css';
import NewsForm from '../../organisms/NewsForm.js'
import Template from '../../templates/Template.js';

const HomePage = () => (

            <Template>
                <main className={styles.main}>
                    <NewsForm></NewsForm>
                </main>
            </Template>

    );

export default HomePage;