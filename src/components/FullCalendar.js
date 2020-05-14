import React, { Component } from 'react';
import { FullCalendar } from 'primereact/fullcalendar';
// import {EventService} from '../service/EventService';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { ScrollPanel } from 'primereact/scrollpanel';

class FullCalendarComponent extends Component {

    constructor() {
        super();
        this.state = {
            events: [],
            options: {
                plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
                defaultView: 'dayGridMonth',
                defaultDate: '2020-01-01',
                header: {
                    left: 'prev,next',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                },
                editable: true
            }
        };
        // this.eventService = new EventService();
    }

    componentDidMount() {
        // this.eventService.getEvents().then(data => this.setState({events: data}));
    }

    render() {

        return (
            <React.Fragment>
                <div className="full-calendar-content">
                    <ScrollPanel className="events-scroll-panel">
                        <FullCalendar options={this.state.options} />
                    </ScrollPanel>
                </div>
            </React.Fragment>
        );
    }
}

export default FullCalendarComponent;