import React, { Fragment } from 'react';
import { Calendar } from 'primereact/calendar';
import { Field } from 'react-final-form';

const InputTime = ({ input, name, placeholder, value, ...rest }) => (
    <Fragment>
        <Calendar
            {...input}
            {...rest}
            value={input.value}
            name={input.name}
            placeholder={placeholder}
            timeOnly={true}
            hourFormat={24}
            onChange={event => input.onChange(event)}
        />
    </Fragment>
)
export default props => <Field component={InputTime} {...props} />;