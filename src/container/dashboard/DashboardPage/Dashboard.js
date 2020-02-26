import React, {Component} from 'react';
import {connect} from 'react-redux';
import {projectActions} from 'container/project/actions/project.actions';
import CAlendar from 'components/Calendar';
import INputTextarea from 'components/InputTextarea';
import Sidebar from 'components/Sidebar';
import Dropdown from 'components/Dropdown';
import InputTime from 'components/InputTime24H';
import 'static/dashboard.css';
import Button from 'components/Button';
import Input from 'components/Input';

import dashboard from 'reducers/index';
import { dashboardActions } from 'container/dashboard/actions/dashboard.actions';


class Dashboard extends Component {  

    constructor(props) {
        super(props);

        this.state = {
            dash: {
                project: null,
                arrivalTime: null,
                departureTime: null,
                pause: "00:30",
                date: null,
                comment: null
            },
             submitted: false 
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

    handleSubmit = (e)=> {
        e.preventDefault();
        console.log("Dashboard state: ", this.state);

        this.setState({ submitted: true });
        const { dash } = this.state;
        if(dash.project && dash.arrivalTime && dash.departureTime && dash.pause && dash.date && dash.comment) {
            this.props.dashboard(dash);
        }
    }

    render() {
        const { projects, dashboarding } = this.props; 
        const { dash, submitted } =  this.state;

            return (
                <div className='containerDashboard'>
                    <Sidebar />
                    <form name="form" onSubmit={this.handleSubmit}>
                        <div className="contentSectin">
                            <div className="workDateAndTime">
                                <div className="calendar">
                                    <CAlendar id="calendar" name="calendar" value={dash.date} placeholder="Date" onChange={this.handleChange}/>
                                </div>
                                <div className="dropdown">
                                    {projects.pending && <em>Loading users...</em>}
                                    {projects.error && <span className="text-danger">ERROR: {projects.error}</span>}
                                    <Dropdown id="dropdown" name="dropdown" value={dash.project} onChange={this.handleChange} options={projects.items} />
                                </div>
                                <div className="timeSection">
                                    <div className="arrivalTime">
                                        <InputTime id="arrivalTime" name="arrivalTime" value={dash.arrivalTime} placeholder="Arrival time" onChange={this.handleChange} />
                                    </div>
                                    <div className="departureTime">
                                        <InputTime id="departureTime" name="departureTime" value={dash.departureTime} placeholder="Departure time" onChange={this.handleChange}/>
                                    </div>
                                    <div className="pause">
                                        <Input type="text" id="pause" name="pause" value={dash.pause} placeholder="Pause" onChange={this.handleChange} />
                                    </div>
                                    <div className="textarea">
                                        <INputTextarea id="textArea" name="textArea" value={dash.comment} placeholder="Comment" onChange={this.handleChange}/>
                                    </div>
                                    <div className="dash-save-button">
                                        <Button type="submit" label="SAVE" />
                                        { dashboarding }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>  
            );
        }
    }

function mapStateToProps(state) {
    const { projects, project } = state;
    const { dashboarding } = dashboard;
    return { project, projects, dashboarding};
}


const actionCreators = {
    getProjects: projectActions.getAll,
    dashboard: dashboardActions.dashboard
}

export default connect(mapStateToProps, actionCreators) (Dashboard);