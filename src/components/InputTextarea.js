import React, { Component } from 'react';
import {InputTextarea} from 'primereact/inputtextarea';

class INputTextarea extends Component{
    constructor() {
        super();
        this.state = {
            value: null
        };
    }

    render() {
        const { id, name, placeholder } = this.props;
        return(
            <div>
                <InputTextarea rows={3} cols={21} value={this.state.value} id={id} name={name} placeholder={placeholder} onChange={(e) => this.setState({value: e.target.value})} autoResize={true} />
            </div>
        );
    }
}
export default INputTextarea;

