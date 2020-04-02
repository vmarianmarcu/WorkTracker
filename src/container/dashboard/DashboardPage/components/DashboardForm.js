import React from 'react';
import { Form } from 'react-final-form';
import Datepicker from './Datepicker';
import PanelSection from './PanelSection';
import arrayMutators from 'final-form-arrays';
import { FieldArray } from 'react-final-form-arrays';
import Button from 'components/Button';
import { ScrollPanel } from 'primereact/scrollpanel';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
    await sleep(300);
    window.alert(JSON.stringify(values, 0, 2));
};

const DashboardForm = ({ dash, projects, dashboardPost, postDashData }) => (
    <div className="dashForm">
        <Form
            // onSubmit={formObj => {
            //     console.log(formObj);
            // }}
            onSubmit={onSubmit}
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
                                <ScrollPanel className="workDateAndTime-scrollPanel">
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
                                </ScrollPanel>
                            </div>
                            <div className="fixedItems">
                                {/*  Add item button */}
                                <Button
                                    type="button"
                                    icon="pi pi-plus"
                                    onClick={() => push("panelSection", undefined)}
                                />
                                <Button
                                    label="SAVE"
                                    type="submit"
                                    icon="pi pi-check"
                                    disabled={submitting || pristine}
                                />
                                <Button
                                    label="Reset"
                                    type="button"
                                    icon="pi pi-undo"
                                    onClick={form.reset}
                                    disabled={submitting || pristine}
                                />
                                {dashboardPost}
                            </div>
                        </div>
                    </form>
                );
            }}
        />
    </div>
)
export default DashboardForm;
