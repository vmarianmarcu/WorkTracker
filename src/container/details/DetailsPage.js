import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sidebar from 'components/Sidebar';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { loadWorkDetails } from 'data/actions';
import RowTable from './components/RowTable';

class Details extends Component {

    componentDidMount() {
        this.props.fetchWorkDetails();
    }

    render() {

        const { loadWorkDetails } = this.props;

        return (
            <div className='containerDashboard' >
                <Header />
                <hr />
                <Sidebar />
                <RowTable loadWorkDetails={loadWorkDetails} />
                <Footer />
            </div>
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
