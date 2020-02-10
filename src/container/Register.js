import React, { Component } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import '../static/register.css'

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
                <h3>Sign up</h3>
                <form onSubmit={this.handleSubmit}>
                    <Input type="text" id="firstName" placeholder="FirstName*" onChange={this.handleChange} />
                    <Input type="text" id="lastName" placeholder="LastName*" onChange={this.handleChange} />
                    <Input type="email" id="email" placeholder="Email Address*" onChange={this.handleChange} />
                    <Input type="password" id="password" placeholder="Password*" onChange={this.handleChange} />
                    <Button type="submit" label="SIGN UP" />
                </form>
                <p className="linkToRegister"> Already have an account? <Link to="login">Sign in</Link></p>
            </div>
        );
    }
}
export default Register;
