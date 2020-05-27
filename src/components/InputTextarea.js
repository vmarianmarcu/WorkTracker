import React, { Fragment } from 'react';
import { InputTextarea } from 'primereact/inputtextarea';
import { Field } from 'react-final-form';

const Textarea = ({ input, name, placeholder, value, ...rest }) => (
    <Fragment>
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
    </Fragment>
)
export default props => <Field name="textarea" component={Textarea} {...props} />;