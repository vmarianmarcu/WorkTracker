import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

// import { userActions } from 'container/login/actions/user.actions';
// import registration from 'reducers/index';
import { registerUser } from 'data/actions';
import RegisterForm from 'container/login/RegisterPage/PegisterForm';

class Register extends Component {

    render() {
        const { registerUser } = this.props;
        return (
            <Fragment>
                <RegisterForm registerUser={registerUser} />
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    // const { registering } = registration;
    // return { registering };
}

const actionsCreators = {
    registerUser: registerUser
}

export default connect(mapStateToProps, actionsCreators)(Register);
