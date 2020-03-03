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

const Item = ()=> {
    
}

class Dashboard extends Component {  

    constructor(props) {
        super(props);

        this.state = {
            dash: [{
                projectName: "",
                arrivalTime: "",
                departureTime: "",
                pause: "00:30",
                date: "",
                comment: "",
            }],
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
        if(dash.projectName && dash.arrivalTime && dash.departureTime && dash.pause && dash.date && dash.comment) {
            this.props.dashboard(dash);
        }
    }

    // addSection = (e) => {
    //     this.setState((prevState) => ({
    //         dash: [
    //             ...prevState.dash,
    //             {
    //                 projectName: null,
    //                 arrivalTime: null,
    //                 departureTime: null,
    //                 pause: "00:30",
    //                 comment: null,
    //             }
    //         ]
    //     }));
    // }

    addInputs = () => {
        const item = {
            projectName: null,
            arrivalTime: null,
            departureTime: null,
            pause: "00:30",
            comment: null
        }
        let newDash = [...this.state.dash, item]
        this.setState({
            dash: newDash
        })
        // var newInputs = this.state.dash.length;
        // this.setState(prevState => ({dash: prevState.dash.concat([newInputs]) }));
    }

    render() {
        const { projects, dashboardPost } = this.props; 
        const { dash, submitted } =  this.state;

            return (
                <div className='containerDashboard'>
                    <Sidebar />
                    <form name="form" onSubmit={this.handleSubmit}>
                        <div className="contentSectin">
                            <div className="workDateAndTime">
                                <div className="calendar">
                                    <CAlendar id="calendar" name="date" value={dash.date} placeholder="Date" onChange={this.handleChange}/>
                                </div>
                                <div className="addButton">
                                    <Button type="button" icon="pi pi-plus" onClick={ this.addInputs } />
                                </div>
                                {
                                   dash.map((item, index) => {
                                        return(
                                            <div className="dynamicContent" key={index}>
                                                <div>
                                                    <span>
                                                    <div className="deleteButton">
                                                        <Button type="button" icon="pi pi-times" />
                                                    </div>
                                                    <div className="dropdown">
                                                        {projects.pending && <em>Loading users...</em>}
                                                        {projects.error && <span className="text-danger">ERROR: {projects.error}</span>}
                                                        <Dropdown id="dropdown" name="projectName" value={item.projectName} onChange={this.handleChange} options={projects.items} />
                                                    </div>
                                                    </span>
                                                </div>
                                                <div className="timeSection">
                                                    <div className="arrivalTime">
                                                        <InputTime id="arrivalTime" name={`arrivalTime${index}`} value={item.arrivalTime} placeholder="Arrival time" onChange={this.handleChange} />
                                                    </div>
                                                    <div className="departureTime">
                                                        <InputTime id="departureTime" name={`departureTime${index}`} value={item.departureTime} placeholder="Departure time" onChange={this.handleChange}/>
                                                    </div>
                                                    <div className="pause">
                                                        <Input type="time" id="pause" name={`pause${index}`} value={item.pause} placeholder="Pause" onChange={this.handleChange} />
                                                    </div>
                                                    <div className="textarea">
                                                        <INputTextarea id="textArea" name={`textArea${index}`} value={item.comment} placeholder="Comment" onChange={this.handleChange}/>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                <div className="dash-save-button">
                                    <Button type="submit" label="SAVE" />
                                    { dashboardPost }
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
    const { dashboardPost } = dashboard;
    return { project, projects, dashboardPost};
}

const actionCreators = {
    getProjects: projectActions.getAll,
    dashboard: dashboardActions.dashboard
}

export default connect(mapStateToProps, actionCreators) (Dashboard);