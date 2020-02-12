import React, { Component } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../store/reducers/Reducer'

class Login extends Component {
    
    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value 
        })
    }

    handleSubmit = (e)=> {
        e.preventDefault();
        console.log(this.state);
        let { email, password } = this.state
        this.props.login(email, password);
    }
    
    render() {
        let { isLoginPending, isLoginSuccess, loginError} = this.props

        return (
            <div className='containerLogin'>
                <form onSubmit={this.handleSubmit}>
                    <h3>Sign in</h3>
                    <Input type="email" id="email" placeholder="Email Address*" onChange={this.handleChange} />
                    <Input type="password" id="password" placeholder="Password*" onChange={this.handleChange} />
                    <Button type="submit" label= "SIGN IN"/>

                    { isLoginPending && <div>Please wait...</div> }
                    { isLoginSuccess && <div>Welcome back!</div> }
                    { loginError && <div>{loginError.message}</div> }

                </form>
                <p className="linkToRegister"> Don't have an account? <Link to="register">Sign Up</Link></p>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        isLoginPending: state.isLoginPending, 
        isLoginSuccess: state.isLoginSuccess,
        loginError: state.loginError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password) => dispatch(login(email, password))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
