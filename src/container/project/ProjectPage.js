import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sidebar from 'components/Sidebar';
import { loadProjects } from 'data/actions';
import ProjectTable from './components/ProjectTable';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { postNewProject } from 'data/actions';

class Projects extends Component {

    componentDidMount() {
        this.props.getProjects();
    }

    render() {
        const { projectData, addProject } = this.props;

        return (
            <div>
                <Header />
                <Sidebar />
                <ProjectTable projectData={projectData} addProject={addProject} />
                <Footer />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { projectData } = state;
    return { projectData };
}

const actionCreators = {
    getProjects: loadProjects,
    addProject: postNewProject
}

export default connect(mapStateToProps, actionCreators)(Projects);
