import React, { Component, Fragment } from 'react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { ScrollPanel } from 'primereact/scrollpanel';
import EventsCalendar from 'components/FullCalendar';

class CalendarComponent extends Component {

    constructor() {
        super();
        this.state = {
            events: [],
            options: {
                plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
                defaultView: 'dayGridMonth',
                defaultDate: '2020-01-01',
                navLinks: true,
                weekends: true,
                // weekNumbersWithinDays: true,
                // weekNumbers: true,
                header: {
                    left: 'prev, next, today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                },
                editable: true
            }
        };
    }

    render() {

        const { loadEvents } = this.props;

        return (
            <Fragment>
                <div className="full-calendar-content">
                    <ScrollPanel className="events-scroll-panel">
                        <EventsCalendar
                            options={this.state.options}
                            events={loadEvents.payload}
                        />
                    </ScrollPanel>
                </div>
            </Fragment>
        );
    }
}

export default CalendarComponent;