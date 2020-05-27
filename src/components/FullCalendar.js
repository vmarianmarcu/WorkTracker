import React, { Fragment } from 'react';
import { FullCalendar } from 'primereact/fullcalendar';

const FullCalendarComponent = ({ className, options, events }) => {
    return (
        <Fragment>
            <FullCalendar className={className} options={options} events={events} />
        </Fragment>
    )
}
export default FullCalendarComponent;