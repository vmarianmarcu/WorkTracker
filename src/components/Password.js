import React, { Fragment } from 'react';
import { Password } from 'primereact/password';

const PasswordField = ({ id, placeholder }) => (
    <Fragment>
        <span className="p-float-label">
            <Password id={id} />
            <label htmlFor={id}>{placeholder}</label>
        </span>
    </Fragment>
)
export default PasswordField;