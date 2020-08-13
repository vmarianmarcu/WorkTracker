import React, { Fragment } from 'react';
import { Calendar } from 'primereact/calendar';
import { Field } from 'react-final-form';

const Datepicker = ({ id, input, name, placeholder, value, dateFormat, inline, yearNavigator, monthNavigator, showIcon, touchUI, yearRange, labelName, ...rest }) => (
    < Fragment>
        <Calendar
            {...input}
            {...rest}
            id={id}
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
        <label htmlFor="float-calendar">{labelName}</label>
    </Fragment >
)
export default props => <Field component={Datepicker} {...props} />;