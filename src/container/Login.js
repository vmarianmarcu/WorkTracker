import React, { Component } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import { Link } from 'react-router-dom'

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
    }
    
    render() {
        return (
            <div className='containerLogin'>
                <form onSubmit={this.handleSubmit}>
                    <h3>Sign in</h3>
                    <Input type="email" id="email" placeholder="Email Address*" onChange={this.handleChange} />
                    <Input type="password" id="password" placeholder="Password*" onChange={this.handleChange} />
                    <Button label= "SIGN IN"/>
                </form>
                <p className="linkToRegister"> Don't have an account? <Link to="register">Sign Up</Link></p>
            </div>
        );
    }
}
export default Login;
