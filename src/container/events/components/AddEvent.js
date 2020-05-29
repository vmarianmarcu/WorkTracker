import React, { Component, Fragment } from 'react';
import { Dialog } from 'primereact/dialog';
import Button from 'components/Button';
import AddEventForm from './AddEventForm';

class AddEvents extends Component {

    constructor() {
        super();
        this.state = {
            displayMaximizable: false,
            position: 'left',
            eventTitle: null,
            dateStart: null,
            dateEnd: null,
            hourStart: null,
            hourEnd: null
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
        return (
            <Fragment>
                <div className="add-event-btn">
                    <Button
                        label="Add Event"
                        icon="pi pi-external-link"
                        onClick={() => this.onClick('displayMaximizable')}
                    />
                </div>
                <Dialog header="Add Event" visible={this.state.displayMaximizable} style={{ width: '50vw' }}
                    onHide={() => this.onHide('displayMaximizable')} maximizable blockScroll footer={this.renderFooter('displayMaximizable')}>
                    <AddEventForm
                        eventTitle={this.state.eventTitle}
                        dateStart={this.state.dateStart}
                        dateEnd={this.state.dateEnd}
                        hourStart={this.state.hourStart}
                        hourEnd={this.state.hourEnd}
                    />
                </Dialog>
            </Fragment>
        )
    }
}

export default AddEvents;