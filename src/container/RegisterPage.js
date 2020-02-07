import React, {Component} from 'react';
import FirstName from '../components/FirstName';
import LastName from '../components/LastName';
import Button from '../components/Button';

class RegisterPage extends Component {

    onHandleRegistration = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div className='container'>
                <form onSubmit={this.onHandleRegistration}>
                    <h3>Sign up</h3>
                    <FirstName/>
                    <LastName/>
                    <Button label="SIGN UP" />
                </form>
            </div>
        );
    }
}
export default RegisterPage;
