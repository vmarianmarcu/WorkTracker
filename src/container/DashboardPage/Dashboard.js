import React, { Component } from 'react';
import ProjectList  from '../../components/ProjectsList';
import { connect } from 'react-redux';
import AddProject from '../../components/AddProject';

import Navbar from '../Navbar/Navbar'; 
import '../../static/dashboard.css';

import { projectActions } from '../../actions/project.actions';

class Dashboard extends Component {  

    componentDidMount() {
        this.props.getProjects();
    }
                
    
    render() {
        const { projects } = this.props; 

            return (
                <div>
                    {/* <div>
                        <h3>All registered projects:</h3>
                        {projects.pending && <em>Loading users...</em>}
                        {projects.error && <span className="text-danger">ERROR: {projects.error}</span>}
                        {projects.items &&
                            <ul>
                                {projects.items.map((project) =>
                                    <li key={project.id}>
                                        {project.name}<br></br>
                                    </li>
                                )}
                            </ul>
                        }
                    </div> */}

                    <div className='containerDashboard'>
                        <div>
                            <Navbar />
                            <h3>Dashboard</h3>
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