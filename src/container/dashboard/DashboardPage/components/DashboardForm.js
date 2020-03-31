import React from 'react';

import { Form } from 'react-final-form';
import AddItem from './AddItem';
import SubmitButton from './SubmitButton';
import Datepicker from './Datepicker';
import PanelSection from './PanelSection';
import arrayMutators from "final-form-arrays";
import { FieldArray } from "react-final-form-arrays";

const DeleteItem = ({ dash, projects, dashboardPost, postDashData }) => (
    <div className="dashForm">
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
            }) => {
                return (
                    <form name="form" onSubmit={handleSubmit}>
                        <div className="contentSectin">
                            <div className="workDateAndTime">
                                <Datepicker value={dash.date} />
                                <FieldArray
                                    name="panelSection"
                                // initialValue={[{}]}
                                >
                                    {({ fields }) =>
                                        fields.map((name, index) => (
                                            <PanelSection name={name} index={index} projects={projects} dash={dash} onClick={() => pop("panelSection")} />
                                        ))
                                    }
                                </FieldArray>
                            </div>
                            <div className="fixedItems">
                                <AddItem onClick={() => push("panelSection", undefined)} />
                                <SubmitButton postDashData={postDashData} />
                                {dashboardPost}
                            </div>
                        </div>
                    </form>
                );
            }}
        />
    </div>
)
export default DeleteItem;
