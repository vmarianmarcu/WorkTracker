import React, {Component} from 'react'; 
import FullCalendar from 'components/FullCalendar';
// import {FullCalendar} from 'primereact/fullcalendar';
// // import FullCalendar from '@fullcalendar/react'
// import dayGridPlugin from '@fullcalendar/daygrid';
import 'static/app.css';
import 'index.css';

class EventPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h3>Events page</h3>
                <FullCalendar
                    // defaultView="dayGridMonth"
                    // plugins={[dayGridPlugin]}
                    // weekends={false}
                    // events={[
                    //     { title: 'event 1', date: '2019-04-01' },
                    //     { title: 'event 2', date: '2019-04-02' }
                    // ]}
                />
            </div>
         );
    }
}
 
export default EventPage;