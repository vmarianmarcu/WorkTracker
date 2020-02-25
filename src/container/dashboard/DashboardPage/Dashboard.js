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

    constructor(props) {
        super(props);

        this.state = {
            dash: {
                projects: '',
                arrivalTime: '',
                departureTime: '',
                date: '',
                comment: ''
            },
             submitted: true 
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.getProjects();
    }
    
    handleChange = (e) => {

        const { name, value } = e.target;
        const { dash } = this.state;
        this.setState({
            dash: {
                ...dash,
                [name]: value
            }
        });
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
                                <Dropdown id="dropdown" name="dropdown" options={projects.items} />
                            </div>
                            <div className="timeSection">
                                <div className="arrivalTime">
                                    <InputTime id="arr ivalTime" name="arrivalTime" placeholder="Arrival time"/>
                                </div>
                                <div className="departureTime">
                                    <InputTime id="departureTime" name="departureTime" placeholder="Departure time"/>
                                </div>
                            </div>
                            <div className="calendar">
                                <CAlendar id="calendar" name="calendar" placeholder="Date" />
                            </div>
                            <div className="textarea">
                                <INputTextarea id="textArea" name="textArea" placeholder="Comment" />
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