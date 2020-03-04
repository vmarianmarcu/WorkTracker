import React, { Component } from 'react';
import { connect } from 'react-redux';
import { projectActions } from 'container/project/actions/project.actions';
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

const Item = ({ item, projects, handleChange, index }) => (
    <div className="dynamicContent">
        <div className="dropdownAndPause">
            <span>
                <div className="dropdown">
                    {projects.pending && <em>Loading users...</em>}
                    {projects.error && <span className="text-danger">ERROR: {projects.error}</span>}
                    <Dropdown id="dropdown" name={"projectName" + index} value={item.projectName} onChange={handleChange} options={projects.items} />
                </div>
            </span>
            <span>
                <div className="pause">
                    <Input type="time" id="pause" name={"pause" + index} value={item.pause} placeholder="Pause" onChange={handleChange} />
                </div>
            </span>
        </div>

        <div className="timeSection">
            <span>
                <div className="arrivalTime">
                    <InputTime id="arrivalTime" name={"arrivalTime" + index} value={item.arrivalTime} placeholder="Arrival time" onChange={handleChange} />
                </div>
            </span>
            <span>
                <div className="departureTime">
                    <InputTime id="departureTime" name={"departureTime" + index} value={item.departureTime} placeholder="Departure time" onChange={handleChange} />
                </div>
            </span>
        </div>
        <div className="textarea">
            <span>
                <INputTextarea id="textArea" name={"textArea" + index} value={item.comment} placeholder="Comment" onChange={handleChange} />
            </span>
        </div>
    </div>
)


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

    // handleChange = (e) => {

    //     const { name, value } = e.target;
    //     const { dash } = this.state;
    //     this.setState({
    //         dash: {
    //             ...dash,
    //             [name]: value
    //         }
    //     });
    // }

    handleChange = (e) => {

        const { index, name, value } = e.target;
        const { dash } = this.state;
        this.setState(prevState => ({
            dash: prevState.dash.map(item => (
                index === item.index ? { ...dash, [name]: value } : item
            ))
        }));
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Dashboard state: ", this.state);

        this.setState({ submitted: true });
        const { dash } = this.state;
        if (dash.projectName && dash.arrivalTime && dash.departureTime && dash.pause && dash.date && dash.comment) {
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
        const { dash, submitted } = this.state;

        return (
            <div className='containerDashboard'>
                <Sidebar />
                <div className="addButton">
                    <Button type="button" icon="pi pi-plus" onClick={this.addInputs} />
                </div>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className="contentSectin">
                        <div className="workDateAndTime">
                            <div className="calendar">
                                <CAlendar id="calendar" name="date" value={dash.date} placeholder="Date" onChange={this.handleChange} />
                            </div>
                            {
                                dash.map((item, index) =>
                                    <Item key={index} index={index} item={item} projects={projects} handleChange={this.handleChange} />)
                            }
                            <div className="dash-save-button">
                                <Button type="submit" label="SAVE" />
                                {dashboardPost}
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
    return { project, projects, dashboardPost };
}

const actionCreators = {
    getProjects: projectActions.getAll,
    dashboard: dashboardActions.dashboard
}

export default connect(mapStateToProps, actionCreators)(Dashboard);