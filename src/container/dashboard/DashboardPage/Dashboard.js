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
import postCurrentDasboardData from '../actions/actions'

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

    render() {
        const { projects, dashboardPost, postDashData } = this.props;
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
                                    <FieldArray 
                                        name="panelSection"
                                        // initialValue={[{}]}
                                    >
                                        {({ fields }) =>
                                            fields.map((name) => (
                                                <PanelSection name={name} projects={projects} dash={dash} onClick={() =>  pop("panelSection")} />
                                            ))
                                        }
                                    </FieldArray>
                                </div>
                                <div className="fixedItems">
                                    <AddItem onClick={() => push("panelSection", undefined)} />
                                    <SubmitButton postDashData={postDashData}/>
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
    dashboard: dashboardActions.dashboard,
    postDashData: postCurrentDasboardData
}

export default connect(mapStateToProps, actionCreators)(Dashboard);
