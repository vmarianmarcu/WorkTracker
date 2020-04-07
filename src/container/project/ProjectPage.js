import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'static/projects.css';
import Sidebar from 'components/Sidebar';
import { loadProjects } from 'data/actions';
import ProjectForm from './components/ProjectForm';
import ProjectList from './components/ProjectsList';
import Footer from 'components/Footer';
import Header from 'components/Header';

class Projects extends Component {

    componentDidMount() {
        this.props.getProjects();
    }

    render() {
        // const { projects } = this.props;

        return (
            <div>
                <Header />
                <hr />
                <Sidebar />
                <div className="p-grid">
                    <div className="p-col-5">
                        <ProjectList />
                    </div>
                    <div className="p-col-5">
                        <ProjectForm />
                    </div>
                </div>
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
    getProjects: loadProjects
}

export default connect(mapStateToProps, actionCreators)(Projects);
