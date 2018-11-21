import React, { Component } from 'react';
import axios from 'axios';
import MainTemplate from '../../templates/MainTemplate';
import styles from './CharactersPage.module.css';
import { Link } from 'react-router-dom';

class CharactersPage extends Component {
  state = {
    loading: false,
    error: false,
    data: [],
    page: 1,
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
      .get(`${process.env.REACT_APP_API_URL}/v1/public/characters`, {
        params: {
          apikey: process.env.REACT_APP_MARVEL_API_KEY,
          limit: 20,
          offset: (this.state.page - 1) * 20,
        },
      })
      .then((response) => {
        this.setState(prevState => ({
          loading: false,
          data: [...prevState.data, ...response.data.data.results],
        }));
      })
      .catch(() => {
        this.setState({
          loading: false,
          error: true,
        });
      });
  };

  handleShowMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }), () => {
      this.fetch();
    });
  };

  render() {
    return (
      <MainTemplate>
        <main className={styles.main}>
          <h1 className={styles.title}>Heroes</h1>
          <section className={styles.form}>
          {this.state.data.map(character => (
            <Link className={styles.link} to={`/character/${character.id}`}>
              <div key={character.id}>
                <h2>{character.name}</h2>
                <img src={`${character.thumbnail.path}/portrait_fantastic.${character.thumbnail.extension}`} alt={character.name} />
              </div>
            </Link>
          ))}
          </section>
          {this.state.loading && 'Loading...'}
          {!this.state.loading && !this.state.error && this.state.data.length === 0 && 'Empty'}
          {this.state.error && (
            <div>
              <p>Download error</p>
              <button type="button" onClick={this.fetch}>Try again</button>
            </div>
          )}
        </main>
        <ul className={styles.paginationList}>
          <li></li>
        </ul>
        {!this.state.loading && !this.state.error && <button className={styles.button} onClick={this.handleShowMore} type="button">Show more</button>}
      </MainTemplate>
    );
  }
}

export default CharactersPage;
