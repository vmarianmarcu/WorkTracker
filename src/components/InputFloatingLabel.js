import React, { Fragment } from 'react';
import { InputText } from "primereact/inputtext";
import { Field } from 'react-final-form';

const InputFloatingLabel = ({ input, id, placeholder, onChange, type, className, name, labelName, value, ...rest }) => (
    <Fragment>
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
                <label htmlFor={id}>{`${labelName}`}</label>
            </span>
        </div>
    </Fragment>
)
export default props => <Field component={InputFloatingLabel} {...props} />;