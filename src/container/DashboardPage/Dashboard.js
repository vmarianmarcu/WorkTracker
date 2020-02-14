import React, { Component } from 'react';
import ProjectList  from '../../components/ProjectsList';
import { connect } from 'react-redux';
import AddProject from '../../components/AddProject';

import { userActions } from '../../actions';


class Dashboard extends Component {  
    
    // componentDidMount() {
    //     this.props.getUsers();
    // }

    // handleDeleteUser(id) {
    //     return (e) => this.props.deleteUser(id);
    // }
    
    render(){
        const { projects } = this.props; 
        const { user, users } = this.props;
        
        return (
            <div className='containerDashboard'>
                <div>
                    <h3>Dashboard</h3>
                    <AddProject />
                    <ProjectList projects={projects} />
                </div>
                {/* <div>
                    <h1>H1 { user.firstName }</h1>
                    <h3>All registered users:</h3>
                    {users.loading && <em>Loading users...</em>}
                    {users.error && <span className="text-denger">ERROR: {users.error}</span>}
                    {users.items &&
                        <ul>
                            {users.items.map((user, index) => 
                                <li key={user.id}>
                                    {user.firstName + ' ' + user.lastName}
                                    {
                                        user.deleting ? <em> - Deleting...</em> 
                                        : user.deleteError ? <span className="text-denger"> - ERROR: {user.deleteError}</span>
                                        // eslint-disable-next-line jsx-a11y/anchor-is-valid
                                        : <span> - <a onClick={this.handleDeleteUser(user.id)}>Delete</a></span>
                                    }
                                </li>
                            )}
                        </ul>
                    }
                </div> */}
            </div>
        );
    }
}

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteError: userActions.delete
}


const mapStateToProps = (props) => {
    return {
        projects: props.projects
    }
}

export default connect(mapState, actionCreators, mapStateToProps) (Dashboard);
