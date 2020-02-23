import React, {Component} from 'react';
import {Calendar} from 'primereact/calendar';

class InputTime extends Component {
    constructor() {
        super();
        this.state = {
            hour: null
        };

    }

    render() {
        const { placeholder } = this.props;
        return (
            <div className="hourInput">
                <Calendar value={this.state.hour} placeholder={placeholder} onChange={(e) => this.setState({hour: e.value})} timeOnly={true} hourFormat="24" />
            </div>
        );
    }
}
export default InputTime;