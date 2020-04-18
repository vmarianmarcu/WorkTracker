import React, { Component } from 'react';
import { InputMask } from 'primereact/inputmask';
import { Field } from 'react-final-form';

class InputMaskField extends Component {

    render() {
        const { input, placeholder, onChange, type, className, name, value, ...rest } = this.props;
        return (
            <div className="input-text-container">
                <span className="p-float-label">
                    <InputMask
                        {...input}
                        {...rest}
                        type={type}
                        mask="99:99"
                        className={className}
                        value={input.value}
                        name={input.name}
                        placeholder={placeholder}
                        onChange={event => input.onChange(event)}
                    />
                </span>
            </div>
        );
    }
}
export default props => <Field component={InputMaskField} {...props} />;