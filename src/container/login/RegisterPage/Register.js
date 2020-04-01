import React, { Component } from 'react';
import 'static/register.css';
import { connect } from 'react-redux';

import { userActions } from 'container/login/actions/user.actions';
import registration from 'reducers/index';
import { Form } from 'react-final-form';
import RegisterForm from 'container/login/RegisterPage/PegisterForm';

class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                email: '',
                password: ''
            },
            submitted: false
        };
    }


    handleChange = (e) => {

        const { name, value } = e.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }


    handleSubmit = (e) => {
        // e.preventDefault();
        console.log("LOgout state: ", this.state);

        this.setState({ submitted: true });
        const { user } = this.state;
        if (user.firstName && user.lastName && user.email && user.password) {
            this.props.register(user);
        }
    }

    render() {
        const { registering } = this.props;
        const { user, submitted } = this.state;
        return (
            <Form
                onSubmit={this.handleSubmit}
                render={props => (
                    <RegisterForm {...{ submitted, user, registering, ...props }} handleChange={this.handleChange} />
                )}
            />
        );
    }
}

function mapState(state) {
    const { registering } = registration;
    return { registering };
}

const actionsCreators = {
    register: userActions.register
}

export default connect(mapState, actionsCreators)(Register);
