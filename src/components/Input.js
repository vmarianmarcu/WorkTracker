import React, { Component } from 'react';
import {InputText} from "primereact/inputtext";

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