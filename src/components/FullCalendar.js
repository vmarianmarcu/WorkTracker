import React from 'react';
import { FullCalendar } from 'primereact/fullcalendar';

const FullCalendarComponent = ({ className, options, events }) => {
    return (
        <React.Fragment>
            <FullCalendar className={className} options={options} events={events} />
        </React.Fragment>
    )
}
export default FullCalendarComponent;