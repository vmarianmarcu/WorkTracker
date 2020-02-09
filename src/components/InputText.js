import React, { Component } from 'react';
import {InputText} from "primereact/inputtext";

class InputField extends Component {
   
    render() {
        const {id, placeholder, onChange } = this.props;
        return(
            <div className="input-text-container">
               <span className="p-float-label">
                    <InputText id={id} onChange={onChange} />
                    <label htmlFor={id}>{placeholder}</label>
                </span>
            </div>
        );
    }
}
export default InputField;