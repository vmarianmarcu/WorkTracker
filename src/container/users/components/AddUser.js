import React, { Component, Fragment } from 'react';
import { Dialog } from 'primereact/dialog';
import Button from 'components/Button';
import UsersForm from './UsersForm';

class AddUserComp extends Component {

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
                    label="Close"
                    icon="pi pi-times"
                    onClick={() => this.onHide(name)}
                    className="p-button-secondary"
                />
            </div>
        );
    }

    render() {

        const { addUser } = this.props;

        return (
            <Fragment>
                <div className="add-btn">
                    <Button
                        label="Add User"
                        icon="pi pi-external-link"
                        onClick={() => this.onClick('displayMaximizable')}
                    />
                </div>
                <Dialog
                    header="Add User"
                    visible={this.state.displayMaximizable}
                    className={`dialog-width`}
                    onHide={() => this.onHide('displayMaximizable')}
                    maximizable
                    blockScroll
                    footer={this.renderFooter('displayMaximizable')}
                >
                    <UsersForm addUser={addUser} />
                </Dialog>
            </Fragment>
        )
    }
}

export default AddUserComp;