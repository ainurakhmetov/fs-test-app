import React from 'react'
import Button from "../atoms/Button";
import styles from './News.module.css'


const News = (props) => {

    return (
 <div className={styles.form}>
     <h3>{props.title}</h3>
     <p>{props.text}</p>
     <Button> next </Button>
 </div>
        )
}

export default News;
