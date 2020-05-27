import React, { Fragment } from 'react';
import { InputMask } from 'primereact/inputmask';
import { Field } from 'react-final-form';

const InputMaskField = ({ input, placeholder, onChange, type, className, name, value, ...rest }) => (
    <Fragment>
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
    </Fragment>
)
export default props => <Field component={InputMaskField} {...props} />;