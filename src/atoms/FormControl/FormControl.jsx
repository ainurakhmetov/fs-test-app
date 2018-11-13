import React from 'react';
import styles from "./FormControl.module.css";

const FormControl = (props) => (
    <section className={styles.form}>
        {props.children}
    </section>
);

export default FormControl;