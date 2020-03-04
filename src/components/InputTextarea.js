import React, { Component } from 'react';
import {InputTextarea} from 'primereact/inputtextarea';

class INputTextarea extends Component{
    render() {
        const { id, name, placeholder, value, onChange } = this.props;
        return(
            <div>
                <InputTextarea rows={1} cols={41} value={value} id={id} name={name} placeholder={placeholder} onChange={onChange} autoResize={true} />
            </div>    
        );
    }
}
export default INputTextarea;

