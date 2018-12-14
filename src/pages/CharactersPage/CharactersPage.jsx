import React, { Component } from 'react';
import axios from 'axios';
import qs from 'qs';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import MainTemplate from '../../templates/MainTemplate';
import styles from './CharactersPage.module.css';
import Button from '../../atoms/Button/Button';
import Pagination from '../../molecules/Pagination/Pagination';
import Loader from '../../atoms/Loading/Loader';

class CharactersPage extends Component {
  state = {
    loading: false,
    error: false,
    data: [],
    totalPage: 0,
    redirect: false,
  };

  componentDidMount() {
    const { location } = this.props;
    const checkPage = qs.parse((location.search), { ignoreQueryPrefix: true });
    if (checkPage.page <= 0 || checkPage.page > 75
      || Number.isNaN(parseFloat(checkPage.page))) {
      return this.setState({
        redirect: true,
      });
    }
    return this.fetch();
  }

  componentDidUpdate(pervProps) {
    const { location } = this.props;
    if (pervProps.location !== location) {
      return this.fetch();
    }
    return false;
  }

  fetch = () => {
    this.setState({
      data: [],
      loading: true,
      error: false,
    });
    const { location } = this.props;
    const currentPage = qs.parse((location.search), { ignoreQueryPrefix: true });
    axios
      .get(`${process.env.REACT_APP_API_URL}/v1/public/characters`, {
        params: {
          apikey: process.env.REACT_APP_MARVEL_API_KEY,
          limit: 20,
          offset: (currentPage.page - 1) * 20,
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
    const {
      data, totalPage, loading, error, redirect,
    } = this.state;

    if (redirect) {
      return <Redirect to="/NotFoundPage" />;
    }
    return (
      <MainTemplate>
        <main className={styles.main}>
          <h1 className={styles.title}>Heroes</h1>
          <section className={styles.form}>
            {data.map(character => (
              <Link className={styles.link} key={character.id} to={`/character/${character.id}`}>
                <p className={styles.name}>{character.name}</p>
                <img src={`${character.thumbnail.path}/portrait_fantastic.${character.thumbnail.extension}`} alt={character.name} />
              </Link>
            ))}
          </section>
          {loading && <Loader styled={styles.ellipsis} />}
          {!loading && !error && data.length === 0 && 'Empty'}
          {error && (
            <div>
              <p>Download error</p>
              <Button onClick={this.fetch} stylyed={styles.button}>Try again</Button>
            </div>
          )}
          <Pagination totalPage={totalPage} />
        </main>
      </MainTemplate>
    );
  }
}

CharactersPage.propTypes = {
  location: PropTypes.object.isRequired,
};
export default CharactersPage;
