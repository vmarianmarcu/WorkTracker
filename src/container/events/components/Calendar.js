import React, { Component } from 'react';
// import {EventService} from '../service/EventService';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { ScrollPanel } from 'primereact/scrollpanel';
import EventsCalendar from 'components/FullCalendar';

class CalendarComponent extends Component {

    constructor() {
        super();
        this.state = {
            events: [
                { title: 'event 1', date: '2020-01-17' },
                { title: 'event 2', date: '2020-01-12' },
                {
                    title: 'Event title',
                    start: '2020-01-01',
                    end: '2020-01-04'
                }
            ],
            options: {
                plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
                defaultView: 'dayGridMonth',
                defaultDate: '2020-01-01',
                header: {
                    left: 'prev, next, today',
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
                        <EventsCalendar options={this.state.options}
                            events={this.state.events}
                        />
                    </ScrollPanel>
                </div>
            </React.Fragment>
        );
    }
}

export default CalendarComponent;