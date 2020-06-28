import React, { Component } from 'react';
import { InputText } from "primereact/inputtext";

class InputField extends Component {

    render() {
        const { placeholder, onChange, type, className, name, value, required } = this.props;
        return (
            <div className="input-text-container">
                <span className="p-float-label">
                    <InputText
                        type={type}
                        className={className}
                        name={name}
                        value={value}
                        placeholder={placeholder}
                        onChange={onChange}
                        required={required}
                    />
                </span>
            </div>
        );
    }
}
export default InputField;