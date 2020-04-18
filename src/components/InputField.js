import React, { Component } from 'react';
import { InputText } from "primereact/inputtext";
import { Field } from 'react-final-form';

class InputField extends Component {

    render() {
        const { input, id, index, placeholder, onChange, type, className, name, labelName, value, ...rest } = this.props;
        return (
            <div className="input-text-field-container">
                <span className="p-float-label">
                    <InputText
                        {...input}
                        {...rest}
                        id={id}
                        type={type}
                        className={className}
                        value={input.value}
                        name={input.name}
                        placeholder={placeholder}
                        onChange={event => input.onChange(event)}
                    />
                    <label htmlFor={id}>{`${labelName} ${index + 1}`}</label>
                </span>
            </div>
        );
    }
}
export default props => <Field component={InputField} {...props} />;