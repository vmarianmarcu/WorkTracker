import React, { Fragment } from 'react';
import { Calendar } from 'primereact/calendar';
import { Field } from 'react-final-form';

const Datepicker = ({ input, name, placeholder, value, dateFormat, inline, yearNavigator, monthNavigator, showIcon, touchUI, yearRange, ...rest }) => (
    < Fragment >
        <Calendar
            {...input}
            {...rest}
            dateFormat={dateFormat}
            touchUI={touchUI}
            monthNavigator={monthNavigator}
            yearNavigator={yearNavigator}
            yearRange={yearRange}
            inline={inline}
            placeholder={placeholder}
            name={input.name}
            value={input.value}
            showIcon={showIcon}
            onChange={event => input.onChange(event)}
        />
    </Fragment >
)
export default props => <Field component={Datepicker} {...props} />;