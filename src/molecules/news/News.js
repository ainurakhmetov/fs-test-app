import React from 'react'
import Button from "../../atoms/button/Button";
import styles from './News.module.css'



const News = (props) => (
         <div className={styles.form}>
             <div className={styles.color}>

             </div>
             <div className={styles.textBlock}>
                 <h3 className={styles.title}>{props.title}</h3>
                 <p>{props.text}</p>
                 <Button> next </Button>
             </div>
         </div>
        );

export default News;
