import React, { Component } from 'react';
import ProjectList  from '../../components/ProjectsList';
import { connect } from 'react-redux';
import AddProject from '../../components/AddProject';

import Navbar from '../Navbar/Navbar'; 
import '../../static/dashboard.css';

import { getProjects, getProjectsPending, getProjectsError } from '../../reducers/project.reducer';
import { bindActionCreators } from 'redux';
import fetchProjects from '../../services/project.service';

class Dashboard extends Component {  

    componentWillMount() {
        const { fetchProjects } = this.props;
        fetchProjects();
    }

    
    render(){
        const { projects, error } = this.props; 
        
        return (
            <div className='containerDashboard'>
                <div>
                    <Navbar />
                    <h3>Dashboard</h3>
                    <AddProject />
                </div>
                <div className='product-list-wrapper'>
                    {error && <span className='product-list-error'>{error}</span>}
                    <ProjectList project={projects} />
                </div>
            </div>
        );
    }
}

const mapStateToProps =  state => ({
    error: getProjectsError(state),
    projects: getProjects(state),
    pending: getProjectsPending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchProjects: fetchProjects
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps) (Dashboard);