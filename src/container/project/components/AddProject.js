import React, { Component, Fragment } from 'react';
import { Dialog } from 'primereact/dialog';
import Button from 'components/Button';
import ProjectForm from './ProjectForm';

class AddProjectComp extends Component {

    constructor() {
        super();
        this.state = {
            displayMaximizable: false,
            position: 'left'
        };

        this.onClick = this.onClick.bind(this);
        this.onHide = this.onHide.bind(this);
    }

    onClick(name, position) {
        let state = {
            [`${name}`]: true
        };

        if (position) {
            state = {
                ...state,
                position
            }
        }

        this.setState(state);
    }

    onHide(name) {
        this.setState({
            [`${name}`]: false
        });
    }

    renderFooter(name) {
        return (
            <div className="footer-button">
                <Button
                    label="Yes"
                    icon="pi pi-check"
                    onClick={() => this.onHide(name)}
                />
                <Button
                    label="No"
                    icon="pi pi-times"
                    onClick={() => this.onHide(name)}
                    className="p-button-secondary"
                />
            </div>
        );
    }

    render() {

        const { addProjects } = this.props;

        return (
            <Fragment>
                <div className="add-btn">
                    <Button
                        label="Add project"
                        icon="pi pi-external-link"
                        onClick={() => this.onClick('displayMaximizable')}
                    />
                </div>
                <Dialog
                    header="Add Project"
                    visible={this.state.displayMaximizable}
                    style={{ width: '30vw' }}
                    onHide={() => this.onHide('displayMaximizable')}
                    maximizable
                    blockScroll
                    footer={this.renderFooter('displayMaximizable')}
                >
                    <ProjectForm addProjects={addProjects} />
                </Dialog>
            </Fragment>
        )
    }
}

export default AddProjectComp;