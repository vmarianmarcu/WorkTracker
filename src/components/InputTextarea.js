import React, { Component } from 'react';
import { InputTextarea } from 'primereact/inputtextarea';
import { Field } from 'react-final-form';

class Textarea extends Component {
    render() {
        const { input, name, placeholder, value, ...rest } = this.props;
        return (
            <div>
                <InputTextarea
                    {...input}
                    {...rest}
                    rows={1}
                    cols={47}
                    name={input.name}
                    value={input.value}
                    placeholder={placeholder}
                    autoResize={true}
                    onChange={event => input.onChange(event)}
                />
            </div>
        );
    }
}
export default props => <Field name="textarea" component={Textarea} {...props} />;
