import React, { Component } from 'react';
import ProjectList  from '../components/ProjectsList';
import { connect } from 'react-redux';
import AddProject from '../components/AddProject'

class Dashboard extends Component {       
    
    render(){
        const { projects } = this.props; 
        
        return (
            <div className='containerDashboard'>
                    <h3>Dashboard</h3>
                    <AddProject />
                    <ProjectList projects={projects} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.project.projects
    }
}

export default connect(mapStateToProps) (Dashboard);
