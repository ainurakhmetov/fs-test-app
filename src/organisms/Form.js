import React, { Component } from 'react';
import styles from '../molecules/News.module.css'
import News from '../molecules/News.js'



class Form extends Component {

    state = {
        news: [
            {title: 'New album of Prodigy', text: 'some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text'},
            {title: 'San Holo: Album 1', text: 'some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text'},
            {title: 'Disiple: Panda Eyes', text: 'some text some text some text some text some text some text some text some textsome text some text some text some text some text some text some text some text some text some text some text some text some text '}
        ]
    };

    render() {

        let newss = null;

        newss = this.state.news.map((news, index) => {
            return (
                <News className={styles.form}
                    key={index}
                    title={news.title}
                    text={news.text}
                />
            )
        });
        return (
            <div>
                {newss}
            </div>
        )
    };
}

export default Form;