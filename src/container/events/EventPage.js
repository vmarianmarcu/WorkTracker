import React, { Component } from 'react';
import Sidebar from 'components/Sidebar';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Calendar from './components/Calendar';
import AddEvent from './components/AddEvent';

class EventPage extends Component {
    state = {}
    render() {
        return (
            <div>
                <Header />
                <hr />
                <Sidebar />
                <AddEvent />
                <Calendar />
                <Footer />
            </div>
        );
    }
}

export default EventPage;