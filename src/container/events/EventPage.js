import React, { Component, Fragment } from 'react';
import Sidebar from 'components/Sidebar';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Calendar from './components/Calendar';
import AddEvent from './components/AddEvent';
import { connect } from 'react-redux';
import { loadEvents } from 'data/actions';
import { postNewEvent } from 'data/actions';

class EventPage extends Component {

    componentDidMount() {
        this.props.fetchEvents();
    }

    render() {

        const { loadEvents, addEvent } = this.props;

        return (
            <Fragment>
                <Header />
                <Sidebar />
                <AddEvent addEvent={addEvent} />
                <Calendar loadEvents={loadEvents} />
                <Footer />
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    const { loadEvents } = state;
    return { loadEvents };
}

const actionCreators = {
    fetchEvents: loadEvents,
    addEvent: postNewEvent
}

export default connect(mapStateToProps, actionCreators)(EventPage);