import React, { Component } from 'react';
import { connect } from 'react-redux';
import { projectActions } from 'container/project/actions/project.actions';
import Sidebar from 'components/Sidebar';
import 'static/dashboard.css';
import Button from 'components/Button';
import { Panel } from 'primereact/panel';
import dashboard from 'reducers/index';
import { dashboardActions } from 'container/dashboard/actions/dashboard.actions';
import Item from './components/DashboardForm';
import { Form } from 'react-final-form';
import AddItem from './components/AddItem';
import SubmitButton from './components/SubmitButton';
import Datepicker from './components/Datepicker';

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
            }]
        };
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

    // handleChange = (e) => {

    //     const { index, name, value } = e.target;
    //     const { dash } = this.state;
    //     this.setState(prevState => ({
    //         dash: prevState.dash.map(item => (
    //             index === item.index ? { ...dash, [name]: value } : item
    //         ))
    //     }));
    // }

    handleSubmit = (e) => {
        // e.preventDefault();
        console.log("Dashboard state: ", this.state);

        this.setState();
        const { dash } = this.state;
        if (dash.projectName) {
            this.props.dashboard(dash);
        }
    }

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
    }

    handleDeleteSection = (index) => {
        let array = [...this.state.dash];
        if (index !== -1) {
            array.splice(index, 1);
            this.setState({
                dash: array
            })
        }
    }

    render() {
        const { projects, dashboardPost } = this.props;
        const { dash } = this.state;

        return (
            <div className='containerDashboard'>
                <Sidebar />
                <Form onSubmit={this.handleSubmit}>
                    {({ handleSubmit }) =>
                        <form name="form" onSubmit={handleSubmit}>
                            <div className="contentSectin">
                                <div className="workDateAndTime">
                                    <Datepicker value={dash.date} />
                                    <div className="panelSection">
                                        {
                                            dash.map((item, index) =>
                                                <div className="panel">
                                                    <div>
                                                        <Panel header={`Project ${index + 1}`} toggleable={true}>
                                                            <Item key={index} index={index}
                                                                item={item}
                                                                projects={projects}
                                                            />
                                                            <div className="deleteButton">
                                                                <Button key={index}
                                                                    className="p-button-danger"
                                                                    type="button"
                                                                    icon="pi pi-times"
                                                                    onClick={(index) => { this.handleDeleteSection(index) }}
                                                                />
                                                            </div>
                                                            <br />
                                                            <br />
                                                        </Panel>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                                <div className="fixedItems">
                                    <AddItem onClick={this.addInputs} />
                                    <SubmitButton />
                                    {dashboardPost}
                                </div>
                            </div>
                        </form>}
                </Form>
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
