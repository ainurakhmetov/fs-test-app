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
    currentPage: 1,
    totalPage: 0,
    currentOffset: 0,
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
          offset: (this.state.currentPage - 1) * 20,
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
  handleNumberClick = (event) => {
    this.setState({
      currentPage: Number(event.target.id),
      data: [],
      //костыль, нельзя вернутся назад
      //({pathname:`?page=${this.state.currentPage}`}),
      //пуш в url номера стр
    }, () => {
      this.fetch();
    });
  };

  render() {
    const { data, currentPage, totalPage } = this.state;
    // const indexOfFirstTodo = currentOffset - 20;
    // const indexOfLastItem = currentOffset + 20;
    // let currentItems = data.slice(indexOfFirstTodo, indexOfLastItem);

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPage / 20); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.handleNumberClick}
        >
          {number}
        </li>
      );
    });
    return (
      <MainTemplate>
        <main className={styles.main}>
          <h1 className={styles.title}>Heroes</h1>
          <section className={styles.form}>
            {console.log(this.state.data)}
            {data.map(character => (
              <Link className={styles.link} key={character.id} to={`/character/${character.id}`}>
                  <h2>{character.name}</h2>
                  <img src={`${character.thumbnail.path}/portrait_fantastic.${character.thumbnail.extension}`} alt={character.name} />
              </Link>
            ))}
            <ul className={styles.pageNumbers}>
              {renderPageNumbers}
            </ul>
            {console.log('currentPage '+currentPage)}
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
      </MainTemplate>
    );
  }
}

export default CharactersPage;
