import React, { Component } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { Field } from 'react-final-form';

class DRopdown extends Component {

    render() {
        const { input, name, options, value, ...rest } = this.props;
        return (
            <div className="dropdownSection">
                <Dropdown
                    {...input}
                    {...rest}
                    value={input.value}
                    name={input.name}
                    options={options}
                    placeholder="Select a Project"
                    optionLabel="name"
                    onChange={event => input.onChange(event)}
                />
            </div>
        );
    }
}
// export default DRopdown;
export default props => <Field component={DRopdown} {...props} />;