import React, { Component } from 'react';
import Input from 'components/Input';
import Button from 'components/Button';
import 'static/projects.css';

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
    }
    
    render() {
        return (
            <div className='addProject'>
                <form onSubmit={this.handleSubmit}>
                    <Input className="inputAddProject" type="text" id="title" placeholder="Add Project*" onChange={this.handleChange} />
                    <Button type="submit" label="ADD" />
                </form>
            </div>
        );
    }
}

export default AddProject;
