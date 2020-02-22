import React, { Component } from 'react';
import LIistBox from 'components/ListBox';

// const projectList = ({projects}) => {
class projectList extends Component {
    constructor() {
        super();
        this.state = {
            projects: null
        }
    }
    handleChange = (e)=> {
        this.setState({
            projects: e.value
        });

    }
       
    render() {
       const { projects } = this.props;
        return(
            <div>
                <LIistBox value={this.state.projects} options={projects.items} onChange={this.handleChange} multiple="true" optionLabel="name"/>
            </div>
        );
    }
}
export default projectList

//projects.items && projects.items.map(project => <p key={project.name}>{ project.name }</p> )