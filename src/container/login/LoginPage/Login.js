import React, { Component } from 'react';
import { connect } from 'react-redux';
import authentication from 'reducers';

import { userActions } from '../actions/user.actions';
import 'static/login.css';
import { Form } from 'react-final-form';
import LoginForm from './LoginForm';

class Login extends Component {

    constructor(props) {
        super(props);

        // reset login status
        this.props.logout();


        this.state = {
            email: '',
            password: '',
            submitted: false
        };
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        // e.preventDefault();
        console.log("LOgin state: ", this.state);

        this.setState({ submitted: true });
        const { email, password } = this.state;
        if (email && password) {
            this.props.login(email, password);
        }

    }

    render() {

        // let { isLoginPending, isLoginSuccess, loginError} = this.props

        const { loggingIn } = this.state;
        const { email, password, submitted } = this.state;

        return (
            <Form
                onSubmit={this.handleSubmit}
                render={props => (
                    <LoginForm {...{ submitted, password, email, loggingIn, ...props }} onSubmit={this.handleSubmit} handleChange={this.handleChange}/>
                )}
            />
        );
    }
}

function mapState(state) {
    const { loggingIn } = authentication;
    return { loggingIn };
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};;

export default connect(mapState, actionCreators)(Login);
