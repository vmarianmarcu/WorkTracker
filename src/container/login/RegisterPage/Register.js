import React, { Component } from 'react';
import { connect } from 'react-redux';

import { userActions } from 'container/login/actions/user.actions';
import registration from 'reducers/index';
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
            }
        };
    }

    render() {
        const { registering } = this.props;
        const { user, submitted } = this.state;
        return (
            <RegisterForm {...{ submitted, user, registering }} />
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
