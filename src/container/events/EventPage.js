import React, { Component, Fragment } from 'react';
import Sidebar from 'components/Sidebar';
import Footer from 'components/Footer';
import Header from 'components/Header';
import EventsCalendar from './components/EventsCalendar';
import AddEvent from './components/AddEvent';
import AddFreeDay from './components/AddFreeDay';
import FreeDaysCalendar from './components/FreeDaysCalendar';
import { connect } from 'react-redux';
import { loadEvents } from 'data/actions';
import { postNewEvent } from 'data/actions';
import { postFreeDays } from 'data/actions';
import { loadFreeDays } from 'data/actions';
import DragTemp from './dragAndDrop/draggableTemplate';

class EventPage extends Component {

    componentDidMount() {
        this.props.fetchEvents();
        this.props.fetchFreeDays()
    }

    render() {

        const { loadEvents, addEvent, loadFreeDays, addFreeDays } = this.props;

        return (
            <Fragment>
                <Header />
                <Sidebar />
                <AddEvent addEvent={addEvent} />
                <AddFreeDay addFreeDays={addFreeDays} />


                {/* <div id='wrapperEvent'>
                    <div id='firstDiv'>
                        <EventsCalendar loadEvents={loadEvents} />
                    </div>

                    <div id='secondDiv'>
                        <FreeDaysCalendar loadFreeDays={loadFreeDays} />
                    </div>
                </div> */}

                <DragTemp />
                <Footer />
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    const { loadEvents, loadFreeDays } = state;
    return { loadEvents, loadFreeDays };
}

const actionCreators = {
    fetchEvents: loadEvents,
    fetchFreeDays: loadFreeDays,
    addEvent: postNewEvent,
    addFreeDays: postFreeDays
}

export default connect(mapStateToProps, actionCreators)(EventPage);