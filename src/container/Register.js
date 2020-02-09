import React, { Component } from 'react';
import InputText from '../components/InputText';
import Button from '../components/Button';
import PasswordField from '../components/Password';

class RegisterPage extends Component {

    state = {
        firstName: 'vasi',
        lastName: 'marian',
        email: 'marian@yahoo.com',
        password: '1234567'
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
                    <InputText id="FirstName" placeholder="FirstName*" onChange={this.handleChange} />
                    <InputText id="LastName" placeholder="LastName*" onChange={this.handleChange} />
                    <InputText id="email" placeholder="Email Address*" onChange={this.handleChange} />
                    <PasswordField id="password" placeholder="Password*" onChange={this.handleChange} />
                    <Button label="SIGN UP" />
                </form>
            </div>
        );
    }
}
export default RegisterPage;
