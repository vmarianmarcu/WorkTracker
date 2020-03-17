import React, { Component } from 'react';
import { Calendar } from 'primereact/calendar';
import { Field } from 'react-final-form';

class CAlendar extends Component {

    render() {
        const { name, placeholder, value, onChange } = this.props;
        return(
            <div>
                <Calendar touchUI={false} monthNavigator={true} yearNavigator={true} yearRange="2020:2035" inline={true} name={name} placeholder={placeholder} value={value} onChange={onChange} showIcon={false} />
            </div>
        )
    }
}
// export default CAlendar;
export default props => <Field component={CAlendar} {...props} />;



