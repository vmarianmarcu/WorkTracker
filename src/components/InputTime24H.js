import React, {Component} from 'react';
import {Calendar} from 'primereact/calendar';
import { Field } from 'react-final-form';

class InputTime extends Component {

    render() {
        const { name, placeholder, value, onChange } = this.props;
        return (
            <div className="hourInput">
                <Calendar value={value} name={name} placeholder={placeholder} onChange={onChange} timeOnly={true} hourFormat="24" />
            </div>
        );
    }
}
// export default InputTime;
export default props => <Field component={InputTime} {...props} />;