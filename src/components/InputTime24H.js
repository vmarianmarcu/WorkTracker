import React, { Fragment } from 'react';
import { Calendar } from 'primereact/calendar';
import { Field } from 'react-final-form';

const InputTime = ({ id, input, name, placeholder, value, labelName, ...rest }) => (
    <Fragment>
        <Calendar
            {...input}
            {...rest}
            id={id}
            value={input.value}
            name={input.name}
            placeholder={placeholder}
            timeOnly={true}
            hourFormat={24}
            onChange={event => input.onChange(event)}
        />
         <label htmlFor="float-input">{labelName}</label>
    </Fragment>
)
export default props => <Field component={InputTime} {...props} />;