import React, { Component } from 'react';
import TextInput from '../components/InputText';

class EmailInput extends Component {


    render() {
        return(
            <div className="input-email-container">
               <span className="p-float-label">
                    <InputText id="in"/>
                    <label htmlFor="in">{placeholder}</label>
                </span>
            </div>
        );
    }
}