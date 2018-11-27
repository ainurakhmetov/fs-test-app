import React, { Component } from 'react';
import axios from 'axios';
import qs from 'qs';
import { Link } from 'react-router-dom';
import MainTemplate from '../../templates/MainTemplate';
import styles from './CharactersPage.module.css';

class CharactersPage extends Component {
  state = {
    loading: false,
    error: false,
    data: [],
    totalPage: 0,
  };
  //git merge master
  componentDidMount() {
    console.log('componentDidMount');
    this.fetch();
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
    //this.fetch();
  }
  fetch = () => {
    console.log('fetch');
    const currentPage = qs.parse(this.props.location.search,{ignoreQueryPrefix: true });
    // console.log('currentPage '+currentPage);
    this.setState({
      data: [],
      loading: true,
      error: false,
    });

    axios
      .get(`${process.env.REACT_APP_API_URL}/v1/public/characters`, {
        params: {
          apikey: process.env.REACT_APP_MARVEL_API_KEY,
          limit: 20,
          offset: (currentPage - 1) * 20,
        },
      })
      .then((response) => {
        this.setState(prevState => ({
          loading: false,
          data: [...prevState.data, ...response.data.data.results],
          totalPage: response.data.data.total,
        }));
      })
      .catch(() => {
        this.setState({
          loading: false,
          error: true,
        });
      });
  };

  render() {
    const { data, totalPage, loading, error } = this.state;
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPage / 20); i++) {
      pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          id={number}
        >
          <Link
            to={`/characters/?page=${number}`}
            className={styles.linkPaginate}
          >
            {number}
          </Link>
        </li>
      );
    });
    return (
      <MainTemplate>
        <main className={styles.main}>
          <h1 className={styles.title}>Heroes</h1>
          <section className={styles.form}>
            {data.map(character => (
              <Link className={styles.link} key={character.id} to={`/character/${character.id}`}>
                  <h2>{character.name}</h2>
                  <img src={`${character.thumbnail.path}/portrait_fantastic.${character.thumbnail.extension}`} alt={character.name} />
              </Link>
            ))}
            <ul className={styles.paginate}>
              {renderPageNumbers}
            </ul>
          </section>
          {loading && 'Loading...'}
          {!loading && !error && data.length === 0 && 'Empty'}
          {error && (
            <div>
              <p>Download error</p>
              <button type="button" onClick={this.fetch}>Try again</button>
            </div>
          )}
        </main>
      </MainTemplate>
    );
  }
}
export default CharactersPage;
