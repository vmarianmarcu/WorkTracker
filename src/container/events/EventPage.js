import React, { Component } from 'react';
import FullCalendar from 'components/FullCalendar';
import Sidebar from 'components/Sidebar';
import Footer from 'components/Footer';
import Header from 'components/Header';

class EventPage extends Component {
    state = {}
    render() {
        return (
            <div>
                <Header />
                <hr />
                <Sidebar />
                <FullCalendar />
                <Footer />
            </div>
        );
    }
}

export default EventPage;