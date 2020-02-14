import React, { Component } from 'react';
import Input from './Input';
import Button from './Button';
import { connect } from 'react-redux';
import { createProject } from '../actions/projectActions';

class AddProject extends Component {   

    state = {
       title: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value 
        })
    }

    handleSubmit = (e)=> {
        e.preventDefault();
        console.log(this.state);
        this.props.createProject(this.state)
    }
    
    render() {
        return (
            <div className='containerLogin'>
                <form onSubmit={this.handleSubmit}>
                    <Input type="text" id="title" placeholder="Add Project*" onChange={this.handleChange} />
                    <Button type="submit" label="ADD" />
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }

}
export default connect(null, mapDispatchToProps) (AddProject);
