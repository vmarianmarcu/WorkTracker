import React, { Component } from 'react';
import { Calendar } from 'primereact/calendar';
import { Field } from 'react-final-form';

class InputTime extends Component {

    render() {
        const { input, name, placeholder, value, ...rest } = this.props;
        return (
            <div className="hourInput">
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
            </div>
        );
    }
}
export default props => <Field component={InputTime} {...props} />;
