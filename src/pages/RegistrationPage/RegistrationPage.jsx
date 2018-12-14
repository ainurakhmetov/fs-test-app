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
    const { email } = this.state;

    const re = /^.*@.*\..+$/;

    // console.log(re.test(email));

    if (email.length === 0) {
      return false;
    }

    return !re.test(email);
  };

  validatePassword = () => {
    const { password } = this.state;


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
    // console.log('sending form');
  };

  render() {
    const { email, password, passwordRepeat } = this.state;
    return (
      <MainTemplate>
        <main className={styles.main}>
          <form className={styles.form} onSubmit={this.handleSubmit}>
            <FormControl>
              <Label htmlFor="email">E-mail</Label>
              <Input
                type="email"
                value={email}
                name="email"
                id="email"
                placeholder="Enter E-mail"
                error={this.validateEmail()}
                onChange={this.handleChange}
              />
            </FormControl>
            <FormControl>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                value={password}
                error={this.validatePassword()}
                onChange={this.handlePasswordChange}
              />
            </FormControl>
            <FormControl>
              <Label htmlFor="passwordRepeat">Repeat password</Label>
              <Input
                type="password"
                name="passwordRepeat"
                id="passwordRepeat"
                value={passwordRepeat}
                error={this.validatePassword()}
                onChange={this.handlePasswordChange}
              />
            </FormControl>
            <div className={styles.buttonWrapper}><Button styled={styles.button} type="submit">Registration</Button></div>
          </form>
        </main>
      </MainTemplate>
    );
  }
}

export default RegistrationPage;
