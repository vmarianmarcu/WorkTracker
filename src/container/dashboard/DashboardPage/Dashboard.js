import React, { Component } from 'react';
import { connect } from 'react-redux';
import { projectActions } from 'container/project/actions/project.actions';
import Sidebar from 'components/Sidebar';
import 'static/dashboard.css';
import dashboard from 'reducers/index';
import { dashboardActions } from 'container/dashboard/actions/dashboard.actions';
import postCurrentDasboardData from '../actions/actions';
import DashboardForm from './components/DashboardForm'

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

    handleSubmit = (values) => {

    }

    render() {
        const { projects, dashboardPost, postDashData } = this.props;
        const { dash } = this.state;

        return (
            <div className='containerDashboard'>
                <Sidebar />
                <DashboardForm dash={dash} projects={projects} dashboardPost={dashboardPost} postDashData={postDashData} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { projects, project } = state;
    const { dashboardPost } = dashboard;
    return { project, projects, dashboardPost };
}

const actionCreators = {
    getProjects: projectActions.getAll,
    dashboard: dashboardActions.dashboard,
    postDashData: postCurrentDasboardData
}

export default connect(mapStateToProps, actionCreators)(Dashboard);
