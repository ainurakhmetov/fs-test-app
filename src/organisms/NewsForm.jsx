/* eslint-disable react/no-array-index-key, react/no-shadow */
import React, { Component } from 'react';
import styles from '../molecules/News/News.module.css';
import News from '../molecules/News/News';

class NewsForm extends Component {
    state = {
      news: [
        { title: 'Marvel #1', text: 'some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text' },
        { title: 'Marvel #2', text: 'some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text' },
        { title: 'Marvel #3', text: 'some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text ' },
      ],
    };

    render() {
      const { news } = this.state;
      const newsArr = news.map((newObj, i) => (
        <News
          className={styles.form}
          key={i}
          title={newObj.title}
          text={newObj.text}
        />));
      return (
        <div>
          {newsArr}
        </div>
      );
    }
}

export default NewsForm;
