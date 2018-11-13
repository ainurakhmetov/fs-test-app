import React, { Component } from 'react';
import MainTemplate from '../../templates/MainTemplate';
import Input from '../../atoms/Input/Input';
import Label from '../../atoms/Label/Label';
import FormControl from '../../atoms/FormControl/FormControl';
import styles from './RegistrationPage.module.css';
import Button from '../../atoms/Button/Button.jsx'

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
                                placeholder="Enter E-mail"
                                onChange={this.handleChange}
                            />
                        </FormControl>
                        <FormControl>
                            <Label htmlFor="password">Password</Label>
                            <Input
                                type="password"
                                name="password"
                                id="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </FormControl>
                        <FormControl>
                            <Label htmlFor="passwordRepeat">Repeat password</Label>
                            <Input
                                type="password"
                                name="passwordRepeat"
                                id="passwordRepeat"
                                value={this.state.passwordRepeat}
                                onChange={this.handleChange}
                            />
                        </FormControl>
                        <Button styled={styles.button} type="submit">Registration</Button>
                    </form>
                </main>
            </MainTemplate>
        );
    }
}

export default RegistrationPage;