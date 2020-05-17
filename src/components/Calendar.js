import React, { Component } from 'react';
import { Calendar } from 'primereact/calendar';
import { Field } from 'react-final-form';

class Datepicker extends Component {

    render() {
        const { input, name, placeholder, value, inline, yearNavigator, monthNavigator, showIcon, touchUI, yearRange, ...rest } = this.props;
        return (
            <React.Fragment>
                <Calendar
                    {...input}
                    {...rest}
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
            </React.Fragment>
        )
    }
}
export default props => <Field component={Datepicker} {...props} />;