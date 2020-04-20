import React, {Component} from 'react'; 
import FullCalendar from 'components/FullCalendar';
// import {FullCalendar} from 'primereact/fullcalendar';
// // import FullCalendar from '@fullcalendar/react'
// import dayGridPlugin from '@fullcalendar/daygrid';
import 'index.css';
import Sidebar from 'components/Sidebar';

class EventPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                  <Sidebar />
                <h3>Events page</h3>
                <FullCalendar />
            </div>
         );
    }
}
 
export default EventPage;