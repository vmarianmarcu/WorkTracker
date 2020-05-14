import React from 'react';
import { Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { FieldArray } from 'react-final-form-arrays';
import Button from 'components/Button';
import InputField from 'components/InputField';
import { Panel } from 'primereact/panel';
import { ScrollPanel } from 'primereact/scrollpanel';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
    await sleep(300);
    window.alert(JSON.stringify(values, 0, 2));
};

const ProjectForm = ({ addProjects }) => (
    <div className="form-position">
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
                values
            }) => {
                return (
                    <div className="new-form-section">
                        <Panel header={`Add Project`} toggleable={true}>
                            <form onSubmit={handleSubmit}>
                                <div className="form-buttons">
                                    <Button
                                        label="Add"
                                        type="button"
                                        icon="pi pi-plus"
                                        onClick={() => push("projects", undefined)}
                                    />
                                    <Button
                                        label="SAVE"
                                        type="submit"
                                        className="p-button-success"
                                        icon="pi pi-check"
                                        disabled={submitting || pristine}
                                        onClick={() => addProjects()}
                                    />
                                    <Button
                                        label="Reset"
                                        type="button"
                                        icon="pi pi-undo"
                                        onClick={form.reset}
                                        disabled={submitting || pristine}
                                    />
                                </div>
                                <div className="form-array-projects">
                                    <ScrollPanel className="scroll-panel">
                                        <FieldArray
                                            name="projects"
                                        // initialValue={[{ project: "test"  }]}
                                        >
                                            {({ fields }) =>
                                                fields.map((name, index) => (
                                                    <div className="form-projects-fields" key={name}>
                                                        {/* <label>Project {index + 1}</label> */}
                                                        <InputField
                                                            id="float-input"
                                                            type="text"
                                                            name={`${name}.add`}
                                                            labelName="Project name"
                                                            index={index}
                                                            required
                                                        />
                                                        <span className="remove-fields-button"
                                                            onClick={() => fields.remove(index)}
                                                            style={{ cursor: 'pointer' }}
                                                        >
                                                            <i className="pi pi-times" style={{ 'fontSize': '2em', 'color': 'red' }}></i>
                                                        </span>
                                                    </div>
                                                ))
                                            }
                                        </FieldArray>
                                    </ScrollPanel>
                                </div>
                            </form>
                        </Panel>
                    </div>
                )
            }}
        />
    </div>
)

export default ProjectForm;
