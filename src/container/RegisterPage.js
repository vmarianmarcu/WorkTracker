import React from 'react';
import FirstName from '../components/FirstName';
import LastName from '../components/LastName';
import Button from '../components/Button';

const RegisterPage = () => {

        return (
            <div className='containerRegister'>
                <form>
                    <h3>Sign up</h3>
                    <FirstName/>
                    <LastName/>
                    <Button label="SIGN UP" />
                </form>
            </div>
        );
    }
export default RegisterPage;
