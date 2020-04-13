import React, { Component } from 'react';
import { Password } from 'primereact/password';

class PasswordField extends Component {

    render() {
        const { id, placeholder } = this.props;
        return (
            <div className="input-password-container">
                <span className="p-float-label">
                    <Password id={id} />
                    <label htmlFor={id}>{placeholder}</label>
                </span>
            </div>
        );
    }
}

export default PasswordField;
