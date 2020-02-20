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
        return(
            <div>
                <h3>Textarea:</h3>
                <InputTextarea rows={2} cols={50} value={this.state.value} onChange={(e) => this.setState({value: e.target.value})} autoResize={true} />
            </div>
        );
    }
}
export default INputTextarea;

