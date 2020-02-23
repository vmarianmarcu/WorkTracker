import React, { Component } from 'react';
import ProjectList  from 'container/project/components/ProjectsList';
import { connect } from 'react-redux';
import AddProject from 'container/project/components/AddProject';

import 'static/dashboard.css';

import { projectActions } from 'container/project/actions/project.actions';
import Sidebar from 'components/Sidebar';

class Dashboard extends Component {  

    componentDidMount() {
        this.props.getProjects();
    }
                
    
    render() {
        const { projects } = this.props; 

            return (
                <div>
                    <Sidebar />
                    <div className='containerDashboard'>
                        <div>
                            <h3>Projects</h3>
                            <AddProject />
                        </div>
                        <div className="">
                            <h3>All registered projects:</h3>
                            {projects.pending && <em>Loading users...</em>}
                            {projects.error && <span className="text-danger">ERROR: {projects.error}</span>}
                            <ProjectList projects={projects} />
                        </div>
                    </div>
                </div>    
            );
        }
    }

function mapStateToProps(state) {
    const { projects, project } = state;
    return { project, projects};
}

const actionCreators = {
    getProjects: projectActions.getAll
}

export default connect(mapStateToProps, actionCreators) (Dashboard);