import React, { Component } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

class Register extends Component {

    state = {
        firstName: '',
        lastName: '',
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
            <div className='containerRegister'>
                <form onSubmit={this.handleSubmit}>
                    <h3>Sign up</h3>
                    <Input type="text" id="FirstName" placeholder="FirstName*" onChange={this.handleChange} />
                    <Input type="text" id="LastName" placeholder="LastName*" onChange={this.handleChange} />
                    <Input type="email" id="email" placeholder="Email Address*" onChange={this.handleChange} />
                    <Input type="password" id="password" placeholder="Password*" onChange={this.handleChange} />
                    <Button label="SIGN UP" />
                </form>
                <p className="linkToRegister"> Already have an account? <Link to="login">Sign in</Link></p>
            </div>
        );
    }
}
export default Register;
