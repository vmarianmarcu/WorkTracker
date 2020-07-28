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
    // window.alert(JSON.stringify(values, 0, 2));
    console.log("Work details: ", values)
};

const DashboardForm = ({ dash, projects, saveWorkDetails }) => (
    <div className="dashForm">
        <Form
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
                reset,
                values
            }) => {
                return (
                    <React.Fragment>
                        <form name="form" onSubmit={
                            handleSubmit
                        }>
                            {/* onSubmit={() => {
                              handleSubmit(values).then(reset);
                             }}> */}
                            <div className="p-grid">
                                <div className="p-col-12">
                                    <div className="workAndTime">
                                        <div className="p-col-4">
                                            <Datepicker value={dash.date} />
                                        </div>

                                        <div className="p-col-4">
                                            <ScrollPanel >
                                                <FieldArray
                                                    name="panelSection"
                                                // initialValue={[{}]}
                                                >
                                                    {({ fields }) =>
                                                        fields.map((name, index) => (
                                                            <PanelSection
                                                                name={name}
                                                                index={index}
                                                                projects={projects}
                                                                dash={dash}
                                                                onClick={() => pop("panelSection")}
                                                            />
                                                        ))
                                                    }
                                                </FieldArray>
                                            </ScrollPanel>
                                        </div>

                                        <div className="p-col-4">
                                            <div className="p-grid">
                                                <div className="p-col-2">
                                                    <Button
                                                        type="button"
                                                        icon="pi pi-plus"
                                                        onClick={() => push("panelSection", undefined)}
                                                    />
                                                </div>

                                                <div className="p-col-3">
                                                    <Button
                                                        label="SAVE"
                                                        type="submit"
                                                        className="p-button-success"
                                                        icon="pi pi-check"
                                                        disabled={submitting || pristine}
                                                        onClick={() => saveWorkDetails()}
                                                    />
                                                </div>
                                                <div className="p-col-7">
                                                    <Button
                                                        label="Reset"
                                                        type="button"
                                                        icon="pi pi-undo"
                                                        onClick={form.reset}
                                                        disabled={submitting || pristine}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>


                    </React.Fragment>
                );
            }}
        />
    </div>
)

export default DashboardForm;
