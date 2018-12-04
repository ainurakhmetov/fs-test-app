import React, { Component } from 'react';
import styles from '../molecules/News/News.module.css'
import News from '../molecules/News/News'

class NewsForm extends Component {

    state = {
      news: [
        {title: 'Marvel #1', text: 'some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text'},
        {title: 'Marvel #2', text: 'some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text'},
        {title: 'Marvel #3', text: 'some text some text some text some text some text some text some text some textsome text some text some text some text some text some text some text some text some text some text some text some text some text '}
      ]
    };

    render() {

      let newsArr = null;

      newsArr = this.state.news.map((news, index) => {
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
          {newsArr}
        </div>
      )
    };
}

export default NewsForm;
