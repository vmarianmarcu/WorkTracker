import React, { Component } from 'react';
import {InputText} from "primereact/inputtext";

class LastName extends Component {
    constructor() {
        super();
        this.state = {
            lastName: null
        }
    }
    render() {
        return(
            <div className="p-col-12 p-md-4">
                <div className="p-inputgroup">
                    <span className="p-inputgroup-addon">
                        <i className="pi pi-user"></i>
                    </span>
                    <InputText placeholder="LastName*" />
                </div>
            </div>
        );
    }
}
export default LastName;