import React, { Component } from 'react';
import { InputText } from "primereact/inputtext";
import { Field } from 'react-final-form';

class InputField extends Component {
   
    render() {
        const { input, placeholder, onChange,type, className, name, value, ...rest } = this.props;
        return(
            <div className="input-text-container">
               <span className="p-float-label">
                    <InputText
                        {...input}
                        {...rest}
                        type={type} 
                        className={className} 
                        value={input.value}
                        name={input.name} 
                        placeholder={placeholder} 
                        onChange={event => input.onChange(event)}
                    />
                </span>
            </div>
        );
    }
}
export default props => <Field component={InputField} {...props} />;
