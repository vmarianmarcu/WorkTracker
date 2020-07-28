import React, { Fragment } from 'react';
import { InputMask } from 'primereact/inputmask';
import { Field } from 'react-final-form';

const InputMaskField = ({ id, input, mask, placeholder, onChange, type, className, name, value, labelName, ...rest }) => (
    <Fragment>
        <InputMask
            {...input}
            {...rest}
            id={id}
            type={type}
            mask={mask}
            className={className}
            value={input.value}
            name={input.name}
            placeholder={placeholder}
            onChange={event => input.onChange(event)}
        />
        <label htmlFor="float-mask">{labelName}</label>
    </Fragment>
)
export default props => <Field component={InputMaskField} {...props} />;