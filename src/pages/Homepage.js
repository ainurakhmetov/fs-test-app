import React from 'react';
import styles from './Homepage.module.css';
import Form from '../organisms/Form.js'
import Template from '../templates/Template.js';

const Homepage = () => (

        <main className={styles.main}>

            <Template>
                <Form></Form>
            </Template>

        </main>

    );

export default Homepage;