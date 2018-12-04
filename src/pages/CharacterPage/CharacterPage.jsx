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
    comics: [],
    showComics: false,
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
          comics: response.data.data.results[0].comics.items,
        });
      })
      .catch(() => {
        this.setState({
          loading: false,
          error: true,
        });
      });
  };
  // handleShowMore = () => {
  //   this.setState(prevState => ({
  //     page: prevState.page + 1,
  //   }), () => {
  //     this.fetch();
  //   });
  // };

  render() {
    const {
      data, loading, error, comics, showComics,
    } = this.state;

    const toggleComicsHandler = () => {
      this.setState({
        showComics: !showComics,
      });
    };

    let showList = null;

    if (showComics) {
      showList = comics.map(comic => (
        <li key={Math.random() + Date.now()}>{comic.name}</li>
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
                {showList !== null ? showList : (showComics && <p>no comics</p>) }
              </ul>
            </div>
          </section>
        </main>
      </MainTemplate>
    );
  }
}

export default CharacterPage;
