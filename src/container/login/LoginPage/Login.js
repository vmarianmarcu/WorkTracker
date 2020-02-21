import React, { Component } from 'react';
import Button from 'components/Button';
import Input from 'components/Input';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import authentication from 'reducers';

import { userActions } from '../actions/user.actions';
import 'static/login.css';

class Login extends Component {

    constructor(props) {
        super(props);

        // reset login status
        this.props.logout();


        this.state = {
            email: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        // this.setState({
        //     [e.target.id]: e.target.value 
        // })

        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (e)=> {
        e.preventDefault();
        console.log("LOgin state: ",this.state);
        // let { email, password } = this.state
        // this.props.login(email, password);

        this.setState({ submitted: true });
        const { email, password } = this.state;
        if (email && password) {
            this.props.login(email, password);
        }

    }
    
    render() {

        // let { isLoginPending, isLoginSuccess, loginError} = this.props

        const { loggingIn } =  this.state;
        const { email, password, submitted } = this.state;

        return (
            <div className='containerLogin'>
                <form name="form" onSubmit={this.handleSubmit}>
                    <h3>Sign in</h3>
                    <div className={'form-group' + (submitted && !email ? ' has-error' : '' )} >
                        <Input type="email" id="email" className="form-control"  name="email"  value={email} placeholder="Email Address*" onChange={this.handleChange} />
                        {
                            submitted && !email &&
                            <div className="help-block"> Email is required </div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                        <Input type="password" id="password" className="form-control" name="password" value={password} placeholder="Password*" onChange={this.handleChange} />
                        {
                            submitted && !password && 
                            <div className="help-block">Password is required</div>
                        }
                    </div>

                    <div className="form-group">
                        <Button type="submit" label= "SIGN IN"/>

                        <p className="linkToRegister"> Don't have an account? <Link to="register">Sign Up</Link></p>
                    </div>

                    {loggingIn} 

                </form>
                
            </div>
        );
    }
}

function mapState(state) {
    const { loggingIn } = authentication;
    return { loggingIn };
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};;

export default connect(mapState, actionCreators) (Login);
