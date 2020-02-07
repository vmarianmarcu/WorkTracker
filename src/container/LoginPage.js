import React, {Component} from 'react';
import Button from '../components/Button';

class LoginPage extends Component {

    constructor() {
        super();
        this.state = {
            buttonName: 'SIGN IN'
        }
    }
    
    onHandleLogin = (e)=> {
        e.preventDefault();    
    }       


    render() {
        return (
            <div className='container'>
                <form onSubmit={this.onHandleLogin}>
                    <h3>Sign in</h3>
                    <Button buttonName= {this.state.buttonName}/>
                </form>
            </div>
        );
    }
}
export default LoginPage;
