import React, { Fragment } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { Field } from 'react-final-form';

const DropdownComponent = ({ id, input, name, placeholder, options, value, labelName, ...rest }) => (
    <Fragment>
        <Dropdown
            {...input}
            {...rest}
            id={id}
            value={input.value}
            name={input.name}
            options={options}
            placeholder={placeholder}
            optionLabel="name"
            onChange={event => input.onChange(event)}
        />
        <label htmlFor="float-input">{labelName}</label>
    </Fragment>
)
export default props => <Field component={DropdownComponent} {...props} />;