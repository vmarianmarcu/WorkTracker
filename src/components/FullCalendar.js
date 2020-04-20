import React, { Component } from 'react';
import { FullCalendar } from 'primereact/fullcalendar';
// import {EventService} from '../service/EventService';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import 'index.css';

class FUllCalendar extends Component {

    constructor() {
        super();
        this.state = {
            events: [],
            options: {
                plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
                defaultView: 'dayGridMonth',
                defaultDate: '2017-02-01',
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
            <div>
                <div className="fullCalendar">
                    <FullCalendar events={this.state.events} options={this.state.options} />
                </div>
            </div>
        );
    }
}
export default FUllCalendar;