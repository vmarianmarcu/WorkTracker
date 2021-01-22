import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Sidebar from 'components/Sidebar';
import { postWorkDetails } from 'data/actions';
import DashboardForm from './components/DashboardForm';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { loadProjects } from 'data/actions';

class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dash: [{
                projectName: "",
                arrivalTime: "",
                departureTime: "",
                pause: "00:30",
                date: "",
                comment: "",
            }],
        }
    }

    componentDidMount() {
        this.props.getProjects();
    }

    render() {
        const { projectData, saveWorkDetails } = this.props;
        const { dash } = this.state;

        return (
            <Fragment>
                <Header />
                <Sidebar />
                <DashboardForm dash={dash} saveWorkDetails={saveWorkDetails} projects={projectData.payload} />
                <Footer />
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    const { projectData } = state;
    return { projectData };
}

const actionCreators = {
    getProjects: loadProjects,
    saveWorkDetails: postWorkDetails
}

export default connect(mapStateToProps, actionCreators)(Dashboard);
