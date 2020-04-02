import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'static/projects.css';
import Sidebar from 'components/Sidebar';
import { loadProjects } from 'data/actions';
import ProjectForm from './components/ProjectForm';

class Projects extends Component {

    componentDidMount() {
        this.props.getProjects();
    }

    render() {
        // const { projects } = this.props;

        return (
            <div>
                <Sidebar />
                <ProjectForm />
                {/* <ProjectList projects={projects} /> */}
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { projects } = state;
    return { projects };
}

const actionCreators = {
    getProjects: loadProjects
}

export default connect(mapStateToProps, actionCreators)(Projects);