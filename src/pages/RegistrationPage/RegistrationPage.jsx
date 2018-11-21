import React, { Component } from 'react';
import MainTemplate from '../../templates/MainTemplate';
import Input from '../../atoms/Input/Input';
import Label from '../../atoms/Label/Label';
import FormControl from '../../atoms/FormControl/FormControl';
import Button from '../../atoms/Button/Button';
import styles from './RegistrationPage.module.css';

class RegistrationPage extends Component {
  initialState = {
    email: '',
    password: '',
    passwordRepeat: '',
  };

  state = this.initialState;

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handlePasswordChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  validateEmail = () => {
    const email = this.state.email;

    const re = /^.*@.*\..+$/;

    console.log(re.test(email));

    if (email.length === 0) {
      return false;
    }

    return !re.test(email);
  };

  validatePassword = () => {
    const password = this.state.password;


    if (password.length === 0) {
      return false;
    }

    if (password.length < 6) {
      return true;
    }

    return !password;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState(this.initialState);
    console.log('Отправка формы');
  };

  render() {
    return (
      <MainTemplate>
        <main className={styles.main}>
          <form className={styles.form} onSubmit={this.handleSubmit}>
            <FormControl>
              <Label htmlFor="email">E-mail</Label>
              <Input
                type="email"
                value={this.state.email}
                name="email"
                id="email"
                placeholder="Ведите E-mail"
                error={this.validateEmail()}
                onChange={this.handleChange}
              />
            </FormControl>
            <FormControl>
              <Label htmlFor="password">Пароль</Label>
              <Input
                type="password"
                name="password"
                id="password"
                value={this.state.password}
                error={this.validatePassword()}
                onChange={this.handlePasswordChange}
              />
            </FormControl>
            <FormControl>
              <Label htmlFor="passwordRepeat">Повтор пароля</Label>
              <Input
                type="password"
                name="passwordRepeat"
                id="passwordRepeat"
                value={this.state.passwordRepeat}
                error={this.validatePassword()}
                onChange={this.handlePasswordChange}
              />
            </FormControl>
            <Button styled={styles.button} type="submit">Зарегистрироваться</Button>
          </form>
        </main>
      </MainTemplate>
    );
  }
}

export default RegistrationPage;
