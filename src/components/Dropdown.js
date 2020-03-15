import React, {Component} from 'react';
import {Dropdown} from 'primereact/dropdown';
import { Field } from 'react-final-form';

class DRopdown extends Component {

    render() {
        const { id, name, options, value, onChange } = this.props;
        return (
            <div className="dropdownSection">
                <Dropdown value={value} id={id} name={name} options={options} onChange={onChange} placeholder="Select a Project" optionLabel="name"/>
                {/* <div style={{marginTop: '.5em'}}>{this.state.projects ? 'Selected Project: ' + this.state.projects.name : 'No project selected'}</div> */}
                {/* <Dropdown value={value} id={id} name={name} options={options} onChange={onChange} placeholder="Select a Project" optionLabel="name"/>
                <div style={{marginTop: '.5em'}}>{{value} ? 'Selected Project: ' + {value} : 'No project selected'}</div>  */}
            </div>
        );
    }
}
// export default DRopdown;
export default props => <Field component={DRopdown} {...props} />;