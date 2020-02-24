import React, {Component} from 'react';
import {Dropdown} from 'primereact/dropdown';

class DRopdown extends Component {

    constructor() {
        super();
        this.state = {
            projects: null
        };

        this.onCityChange = this.onCityChange.bind(this);
    }

    onCityChange(e) {
        this.setState({
            projects: e.value
        });
    }

    render() {
        const { id, name, options } = this.props;
        return (
            <div className="dropdownSection">
                <Dropdown value={this.state.projects} id={id} name={name} options={options} onChange={this.onCityChange} placeholder="Select a Project" optionLabel="name"/>
                <div style={{marginTop: '.5em'}}>{this.state.projects ? 'Selected Project: ' + this.state.projects.name : 'No project selected'}</div>
            </div>
        );
    }
}
export default DRopdown;