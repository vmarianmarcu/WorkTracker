import React from 'react';
import Input from 'components/Input';
import Button from 'components/Button';
import { Link } from 'react-router-dom';
import 'static/register.css';

const RegisterForm = ({ submitted, user, registering, handleSubmit, handleChange }) => (
    <div className='containerRegister'>
        <h3>Sign up</h3>
        <form onSubmit={handleSubmit}>
            <div className={'form-group' + (submitted && !user.firstName ? ' has-error' : '')}>
                <Input type="text"
                    id="firstName"
                    className="form-control"
                    name="firstName"
                    value={user.firstName}
                    placeholder="FirstName*"
                    onChange={handleChange}
                />
                {
                    submitted && !user.firstName &&
                    <div className="help-block">First Name is required</div>
                }
            </div>
            <div className={'form-group' + (submitted && !user.lastName ? ' has-error' : '')}>
                <Input type="text"
                    id="lastName"
                    className="form-control"
                    name="lastName"
                    value={user.lastName}
                    placeholder="LastName*"
                    onChange={handleChange}
                />
                {submitted && !user.lastName &&
                    <div className="help-block">Last Name is required</div>
                }
            </div>
            <div className={'form-group' + (submitted && !user.email ? ' has-error' : '')}>
                <Input type="email"
                    id="email"
                    className="form-control"
                    name="email"
                    value={user.email}
                    placeholder="Email Address*"
                    onChange={handleChange}
                />
                {submitted && !user.email &&
                    <div className="help-block">Email is required</div>
                }
            </div>
            <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                <Input type="password"
                    id="password"
                    className="form-control"
                    name="password"
                    value={user.password}
                    placeholder="Password*"
                    onChange={handleChange} />
                {submitted && !user.password &&
                    <div className="help-block">Password is required</div>
                }
            </div>
            <div className="form-group">
                <Button type="submit" label="SIGN UP" />
                {registering}

                <p className="linkToRegister"> Already have an account? <Link to="login">Sign in</Link></p>
            </div>
        </form>

    </div>
)
export default RegisterForm;
