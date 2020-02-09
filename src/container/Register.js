import React from 'react';
import InputText from '../components/InputText';
import LastName from '../components/LastName';
import Button from '../components/Button';

const RegisterPage = () => {

        return (
            <div className='containerRegister'>
                <form>
                    <h3>Sign up</h3>
                    <InputText/>
                    <LastName/>
                    <Button label="SIGN UP" />
                </form>
            </div>
        );
    }
export default RegisterPage;
