import React, { Fragment } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { Field } from 'react-final-form';

const DropdownComponent = ({ input, name, options, value, ...rest }) => (
    <Fragment>
        <Dropdown
            {...input}
            {...rest}
            value={input.value}
            name={input.name}
            options={options}
            placeholder="Select a Project"
            optionLabel="name"
            onChange={event => input.onChange(event)}
        />
    </Fragment>
)
export default props => <Field component={DropdownComponent} {...props} />;