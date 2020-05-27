import React, { Component, Fragment } from 'react';
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

    RenderListItem = (props) => (
        <div>
            {props.item.projects.name}
        </div>
    )


    render() {

        const { loadWorkDetails } = this.props;

        return (
            <Fragment>
                <Header />
                <Sidebar />
                <RowTable loadWorkDetails={loadWorkDetails} />
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
