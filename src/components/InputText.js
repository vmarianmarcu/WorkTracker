import React, { Component } from 'react';
import {InputText} from "primereact/inputtext";

class InputField extends Component {
    constructor() {
        super();
        this.state = {
            firstName: null
        }
    }
    render() {
        return(
            <div className="p-col-12 p-md-4">
                <div className="p-inputgroup">
                    <span className="p-inputgroup-addon">
                        <i className="pi pi-user"></i>
                    </span>
                    <InputText placeholder="FirstName*" />
                </div>
            </div>
        );
    }
}
export default InputField;