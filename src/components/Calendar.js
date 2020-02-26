import React, { Component } from 'react';
import {Calendar} from 'primereact/calendar';

class CAlendar extends Component {

    render() {
        const { id, name, placeholder, value, onChange } = this.props;
        return(
            <div>
                <Calendar touchUI={false} monthNavigator={true} yearNavigator={true} yearRange="2020:2035" inline={true} id={id} name={name} placeholder={placeholder} value={value} onChange={onChange} showIcon={false} />
            </div>
        )
    }
}
export default CAlendar;



