import React, { Component } from 'react';
import { connect } from 'react-redux';
import { projectActions } from 'container/project/actions/project.actions';
import Sidebar from 'components/Sidebar';
import 'static/dashboard.css';
import dashboard from 'reducers/index';
import { dashboardActions } from 'container/dashboard/actions/dashboard.actions';
import { Form } from 'react-final-form';
import AddItem from './components/AddItem';
import SubmitButton from './components/SubmitButton';
import Datepicker from './components/Datepicker';
import PanelSection from './components/PanelSection';
import arrayMutators from "final-form-arrays";
import { FieldArray } from "react-final-form-arrays";
// import TestComp from '../DashboardPage/TestComp'

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

    handleSubmit = (values) => {
       
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
                <Form  
                    onSubmit={formObj => {
                        console.log(formObj);
                    }}
                    mutators={{
                        ...arrayMutators
                    }}
                    render={({
                        handleSubmit,
                        form: {
                          mutators: { push, pop }
                        }, // injected from final-form-arrays above
                        pristine,
                        form,
                        submitting,
                        values
                      }) => { return (
                        <form name="form" onSubmit={ handleSubmit }>
                            <div className="contentSectin">
                                <div className="workDateAndTime">
                                    <Datepicker value={dash.date} />
                                    <FieldArray name="panelSection">
                                        {() => (
                                            <PanelSection projects={projects} dash={dash} onClick={(index) => { this.handleDeleteSection(index) }} />
                                        )}
                                    </FieldArray>
                                    {/* <FieldArray name="panelSection[0]" component={PanelSection} /> */}
                                </div>
                                {/* <TestComp /> */}
                                <div className="fixedItems">
                                    <AddItem onClick={this.addInputs} />
                                    <SubmitButton />
                                    {dashboardPost}
                                </div>
                            </div>
                        </form>
                   );
                }}
                />
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
