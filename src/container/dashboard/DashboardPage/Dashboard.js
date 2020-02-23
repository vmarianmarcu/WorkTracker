import React, {Component} from 'react';
import {connect} from 'react-redux';
import {projectActions} from 'container/project/actions/project.actions';
import CAlendar from 'components/Calendar';
import INputTextarea from 'components/InputTextarea';
import Sidebar from 'components/Sidebar';
import Dropdown from 'components/Dropdown';
import InputTime from 'components/InputTime24H';
import 'static/dashboard.css';

class Dashboard extends Component {  

    componentDidMount() {
        this.props.getProjects();
    }
    
    handleSubmit = (e)=> {
        // e.preventDefault();

    }
    
    render() {
        const { projects } = this.props; 

            return (
                <div className='containerDashboard'>
                    <Sidebar />
                    <form name="form" onSubmit={this.handleSubmit}>
                        <div className="contentSectin">
                            <div className="dropdown">
                                {projects.pending && <em>Loading users...</em>}
                                {projects.error && <span className="text-danger">ERROR: {projects.error}</span>}
                                <Dropdown options={projects.items} />
                            </div>
                            <div className="timeSection">
                                <div className="arrivalTime">
                                    <InputTime placeholder="Arrival time"/>
                                </div>
                                <div className="departureTime">
                                    <InputTime placeholder="Departure time"/>
                                </div>
                            </div>
                            <div className="calendar">
                                <CAlendar />
                            </div>
                            <div className="textarea">
                                <INputTextarea />
                            </div>
                        </div>
                    </form>
                </div>  
            );
        }
    }

function mapStateToProps(state) {
    const { projects, project } = state;
    return { project, projects};
}

const actionCreators = {
    getProjects: projectActions.getAll
}

export default connect(mapStateToProps, actionCreators) (Dashboard);