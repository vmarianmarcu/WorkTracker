import React, { Component, Fragment } from 'react';
import { Dialog } from 'primereact/dialog';
import Button from 'components/Button';
import AddFreeDayForm from './AddFreeDayForm';

class AddFreeDay extends Component {

    constructor() {
        super();
        this.state = {
            displayMaximizable: false,
            position: 'left',
            title: null,
            start: null,
            end: null,
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

        const { addFreeDays } = this.props;

        return (
            <Fragment>
                <div className="add-btn">
                    <Button
                        label="Add Free Day"
                        icon="pi pi-external-link"
                        onClick={() => this.onClick('displayMaximizable')}
                    />
                </div>
                <Dialog
                    header="Add Free Days"
                    visible={this.state.displayMaximizable}
                    className={`dialog-width`}
                    onHide={() => this.onHide('displayMaximizable')}
                    maximizable
                    blockScroll
                    footer={this.renderFooter('displayMaximizable')}
                >
                    <AddFreeDayForm
                        eventTitle={this.state.title}
                        dateStart={this.state.start}
                        dateEnd={this.state.end}
                        addFreeDays={addFreeDays}
                    />
                </Dialog>
            </Fragment>
        )
    }
}

export default AddFreeDay;