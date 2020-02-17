import React, { Component } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import '../../static/register.css';
import { connect } from 'react-redux';

import { userActions } from '../../actions';
import registration from '../../reducers'


class Register extends Component {

    // state = {
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     password: ''
    // }

    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                email: '',
                password: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    

    handleChange = (e) => {

        const { name, value } = e.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });

        // this.setState({
        //     [e.target.id]: e.target.value 
        // })
    }


    handleSubmit = (e)=> {
        e.preventDefault();
        console.log("LOgout state: ", this.state);

        this.setState({ submitted: true });
        const { user } = this.state;
        if(user.firstName && user.lastName && user.email && user.password) {
            this.props.register(user);
        }
    }

    render() {
        const { registering } =  this.props;
        const { user, submitted } = this.state;
        return (
            <div className='containerRegister'>
                <h3>Sign up</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !user.firstName ? ' has-error' : '')}>
                        <Input type="text" id="firstName" className="form-control" name="firstName" value={user.firstName} placeholder="FirstName*" onChange={this.handleChange} />
                        {
                            submitted && !user.firstName && 
                            <div className="help-block">First Name is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.lastName ? ' has-error' : '')}>
                        <Input type="text" id="lastName" className="form-control" name="lastName" value={user.lastName} placeholder="LastName*" onChange={this.handleChange} />
                        {submitted && !user.lastName && 
                            <div className="help-block">Last Name is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.email ? ' has-error' : '')}>
                        <Input type="email" id="email" className="form-control" name="email" value={user.email} placeholder="Email Address*" onChange={this.handleChange} />
                        {submitted && !user.email &&
                            <div className="help-block">Email is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                        <Input type="password" id="password" className="form-control" name="password" value={user.password} placeholder="Password*" onChange={this.handleChange} />
                        {submitted && !user.password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <Button type="submit" label="SIGN UP" />
                        { registering }

                        <p className="linkToRegister"> Already have an account? <Link to="login">Sign in</Link></p>
                    </div>
                </form>
                
            </div>
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

export  default connect(mapState, actionsCreators) (Register);
