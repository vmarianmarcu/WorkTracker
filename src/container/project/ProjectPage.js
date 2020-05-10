import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sidebar from 'components/Sidebar';
import { loadProjects } from 'data/actions';
import ProjectForm from './components/ProjectForm';
import ProjectList from './components/ProjectsList';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { postNewProject } from 'data/actions';

class Projects extends Component {

    constructor() {
        super();
        this.state = {
            project: null
        }
    }

    componentDidMount() {
        this.props.getProjects();
    }

    // RenderListItem = (props) => (
    //     <div>
    //         {props.item.projects.name}
    //     </div>
    // )

    render() {
        const { projectData, addProjects } = this.props;

        return (
            <div>
                <Header />
                <hr />
                <Sidebar />
                <div className="p-grid">
                    <div className="p-col-5">
                        <ProjectList value={this.state.project} options={projectData.payload} />
                    </div>
                    <div className="p-col-5">
                        <ProjectForm addProjects={addProjects} />
                    </div>
                    <div>
                        {/* {projectData.map((item, index) => (<this.RenderListItem key={item.id} item={item} />))} */}
                    </div>
                </div>
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
    addProjects: postNewProject
}

export default connect(mapStateToProps, actionCreators)(Projects);
