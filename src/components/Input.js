import React, { Component } from 'react';
import {InputText} from "primereact/inputtext";
import { Field } from 'react-final-form';

class InputField extends Component {
   
    render() {
        const {id, placeholder, onChange,type, className, name, value } = this.props;
        return(
            <div className="input-text-container">
               <span className="p-float-label">
                    <InputText type={type} id={id} className={className} name={name} value={value} placeholder={placeholder} onChange={onChange} />
                </span>
            </div>
        );
    }
}
export default InputField;
// export default props => <Field component={InputField} {...props} />;