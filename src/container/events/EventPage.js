import React, { Component, Fragment } from 'react';
import Sidebar from 'components/Sidebar';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Calendar from './components/Calendar';
import AddEvent from './components/AddEvent';

class EventPage extends Component {
    state = {}
    render() {
        return (
            <Fragment>
                <Header />
                <Sidebar />
                <AddEvent />
                <Calendar />
                <Footer />
            </Fragment>
        );
    }
}

export default EventPage;