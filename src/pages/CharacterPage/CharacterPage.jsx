import React, { Component } from 'react';
import axios from 'axios';
import MainTemplate from '../../templates/MainTemplate';
import styles from './CharacterPage.module.css';
import Button from '../../atoms/Button/Button';
import Loader from '../../atoms/Loading/Loader';


class CharacterPage extends Component {

  state = {
    loading: false,
    error: false,
    data: [],
    showComics: false,
    showStory: false,
  };

  componentDidMount() {
    this.fetch();
  };

  fetch = () => {
    this.setState({
      loading: true,
      error: false,
    });

    axios
      .get(`${process.env.REACT_APP_API_URL}/v1/public/characters/${this.props.match.params.id}`, {
        params: {
          apikey: process.env.REACT_APP_MARVEL_API_KEY,
        },
      })
      .then((response) => {
        this.setState({
          loading: false,
          data: response.data.data.results[0],
        });
      })
      .catch(() => {
        this.setState({
          loading: false,
          error: true,
        });
      });
  };
  render() {
    const {
      data, loading, error, showComics, showStory,
    } = this.state;

    const toggleComicsHandler = () => {
      this.setState({
        showComics: !showComics,
      });
    };
    const toggleStoryHandler = () => {
      this.setState({
        showStory: !showStory,
      });
    };

    let showComicsList = null;
    let showStoryList = null;

    if (showComics) {
      showComicsList = data.comics.items.map(comic => (
        <li key={Math.random() + Date.now()}>{comic.name}</li>
      ));
    }
    if (showStory) {
      showStoryList = data.series.items.map(story => (
        <li key={Math.random() + Date.now()}>{story.name}</li>
      ));
    }
    return (
      <MainTemplate>
        <main className={styles.main}>
          <h1 className={styles.title}>Hero</h1>
          {loading && <Loader styled={styles.ellipsis} />}
          {!loading && !error && data === null && 'Empty'}
          {error && (
            <div>
              <p>Download error</p>
              <Button onClick={this.fetch} styled={styles.button}>Try again</Button>
            </div>
          )}

          <section className={styles.form}>
            <div className={styles.left}>
              <h2 className={styles.heroTitle}>{data.name}</h2>
              {data.thumbnail && <img src={`${data.thumbnail.path}/portrait_incredible.${data.thumbnail.extension}`} alt={data.name} />}
            </div>
            <div className={styles.right}>
              {data.description === '' &&  <p>No description</p>}
              {data.description && <p className={styles.description}>{data.description}</p>}
            </div>
            <div>
              <button className={styles.button} onClick={toggleComicsHandler}>
                {showComics ? 'hide ' : 'show '}
                comics list
              </button>
              <ul className={styles.comicsList}>
                {showComicsList !== null ? showComicsList : (showComics && <p>no comics</p>) }
              </ul>
              <button className={styles.button} onClick={toggleStoryHandler}>
                {showStory ? 'hide ' : 'show '}
                story list
              </button>
              <ul className={styles.comicsList}>
                {showStoryList !== null ? showStoryList : (showStory && <p>no story</p>) }
              </ul>
            </div>
          </section>
        </main>
      </MainTemplate>
    );
  }
}

export default CharacterPage;
