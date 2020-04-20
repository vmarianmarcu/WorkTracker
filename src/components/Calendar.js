import React, { Component } from 'react';
import { Calendar } from 'primereact/calendar';
import { Field } from 'react-final-form';

class Datepicker extends Component {

    render() {
        const { input, name, placeholder, value, ...rest } = this.props;
        return (
            <React.Fragment>
                <Calendar
                    {...input}
                    {...rest}
                    touchUI={false}
                    monthNavigator={true}
                    yearNavigator={true}
                    yearRange="2020:2035"
                    inline={true}
                    placeholder={placeholder}
                    name={input.name}
                    value={input.value}
                    showIcon={false}
                    onChange={event => input.onChange(event)}
                />
            </React.Fragment>
        )
    }
}
export default props => <Field component={Datepicker} {...props} />;