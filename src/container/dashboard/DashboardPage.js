import React, { Component } from 'react';
import { connect } from 'react-redux';
import { projectActions } from 'container/project/actions/project.actions';
import Sidebar from 'components/Sidebar';
import { postWorkDetails } from 'data/actions';
import DashboardForm from './components/DashboardForm';
import Footer from 'components/Footer';
import Header from 'components/Header';

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
            }]
        };
    }

    componentDidMount() {
        this.props.getProjects();
    }

    render() {
        const { projects, saveWorkDetails } = this.props;
        const { dash } = this.state;

        return (
            <div className='containerDashboard'>
                <Header />
                <hr />
                <Sidebar />
                <DashboardForm dash={dash} projects={projects} saveWorkDetails={saveWorkDetails} />
                <Footer />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { projects } = state;
    return { projects };
}

const actionCreators = {
    getProjects: projectActions.getAll,
    saveWorkDetails: postWorkDetails
}

export default connect(mapStateToProps, actionCreators)(Dashboard);
