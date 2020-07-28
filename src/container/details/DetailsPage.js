import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Sidebar from 'components/Sidebar';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { loadWorkDetails } from 'data/actions';
import DetailsTabele from './components/DetailsTable';
import WorkRecord from './components/WorkRecord';

class Details extends Component {

    componentDidMount() {
        this.props.fetchWorkDetails();
    }

    render() {

        const { loadWorkDetails } = this.props;

        return (
            <Fragment>
                <Header />
                <Sidebar />
                <DetailsTabele loadWorkDetails={loadWorkDetails} />
                <WorkRecord />
                <Footer />
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    const { loadWorkDetails } = state;
    return { loadWorkDetails };
}

const actionCreators = {
    fetchWorkDetails: loadWorkDetails,
}

export default connect(mapStateToProps, actionCreators)(Details);
