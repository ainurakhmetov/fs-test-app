import React, { Component } from 'react';
import axios from 'axios';
import MainTemplate from '../../templates/MainTemplate';
import styles from './CharacterPage.module.css';


class CharacterPage extends Component {

  state = {
    loading: false,
    error: false,
    data: [],
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
    const hero = this.state.data;
    return (
      <MainTemplate>
        <main className={styles.main}>
          <h1 className={styles.title}>Hero</h1>
          {this.state.loading && 'Loading...'}
          {!this.state.loading && !this.state.error && this.state.data === null && 'Empty'}
          {this.state.error && (
            <div>
              <p>Download error</p>
              <button type="button" onClick={this.fetch}>Try again</button>
            </div>
          )}
          <section className={styles.form}>
            <div className={styles.left}>
              <h2 className={styles.heroTitle}>{hero.name}</h2>
              {(hero.thumbnail) && <img src={`${hero.thumbnail.path}/portrait_incredible.${hero.thumbnail.extension}`} alt={hero.name} />}
            </div>
            <div className={styles.right}>
              {hero.description === '' &&  <p>No description</p>}
              {hero.description && <p className={styles.description}>{hero.description}</p>}
            </div>
          </section>
        </main>
      </MainTemplate>
    );
  }
}

export default CharacterPage;
