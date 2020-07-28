import React, { Fragment } from 'react';
import { InputTextarea } from 'primereact/inputtextarea';
import { Field } from 'react-final-form';

const Textarea = ({ id, input, name, rows, cols, placeholder, value, labelName, ...rest }) => (
    <Fragment>
        <InputTextarea
            {...input}
            {...rest}
            id={id}
            rows={rows}
            cols={cols}
            name={input.name}
            value={input.value}
            placeholder={placeholder}
            autoResize={true}
            onChange={event => input.onChange(event)}
        />
        <label htmlFor="float-input">{labelName}</label>
    </Fragment>
)
export default props => <Field name="textarea" component={Textarea} {...props} />;