import React from 'react';
import styles from './Homepage.module.css';
import NewsForm from '../organisms/NewsForm.js'
import Template from '../templates/Template.js';

const Homepage = () => (

            <Template>
                <main className={styles.main}>
                    <NewsForm></NewsForm>
                </main>
            </Template>

    );

export default Homepage;