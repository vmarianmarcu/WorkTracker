import React from 'react';
import Button from 'components/Button';
import Input from 'components/Input';
import { Link } from 'react-router-dom';
import 'static/login.css';

const LoginForm = ({ handleSubmit, handleChange, submitted, password, loggingIn, email }) => (
    <div className='containerLogin'>
        <form name="form" onSubmit={handleSubmit}>
            <h3> Sign in </h3>
            <div className={'form-group' + (submitted && !email ? ' has-error' : '')} >
                <i className="pi pi-envelope" style={{ 'fontSize': '1.5em' }}></i>
                <Input type="email"
                    id="email"
                    className="form-control"
                    name="email"
                    value={email}
                    placeholder="Email Address*"
                    onChange={handleChange}

                />
                {
                    submitted && !email &&
                    <div className="help-block"> Email is required </div>
                }
            </div>
            <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                <i className="pi pi-key" style={{ 'fontSize': '1.5em' }}></i>
                <Input type="password"
                    id="password"
                    className="form-control"
                    name="password"
                    value={password}
                    placeholder="Password*"
                    onChange={handleChange}
                />
                {
                    submitted && !password &&
                    <div className="help-block">Password is required</div>
                }
            </div>

            <div className="form-group">
                <Button type="submit" label="SIGN IN" />

                <p className="linkToRegister"> Don't have an account? <Link to="register">Sign Up</Link></p>
            </div>

            {loggingIn}

        </form>

    </div>
);


export default LoginForm;
