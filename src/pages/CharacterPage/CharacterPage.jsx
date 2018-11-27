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
    const { data, loading, error } = this.state;
    return (
      <MainTemplate>
        <main className={styles.main}>
          <h1 className={styles.title}>Hero</h1>
          {loading && 'Loading...'}
          {!loading && !error && data === null && 'Empty'}
          {error && (
            <div>
              <p>Download error</p>
              <button type="button" onClick={this.fetch}>Try again</button>
            </div>
          )}

          <section className={styles.form}>
            <div className={styles.left}>
              <h2 className={styles.heroTitle}>{data.name}</h2>
              {(data.thumbnail) && <img src={`${data.thumbnail.path}/portrait_incredible.${data.thumbnail.extension}`} alt={data.name} />}
            </div>
            <div className={styles.right}>
              {data.description === '' &&  <p>No description</p>}
              {data.description && <p className={styles.description}>{data.description}</p>}
            </div>
          </section>
        </main>
      </MainTemplate>
    );
  }
}

export default CharacterPage;
