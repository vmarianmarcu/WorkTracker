import React from 'react';
import { Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { FieldArray } from 'react-final-form-arrays';
import Button from 'components/Button';
import InputField from 'components/InputField';
import { ScrollPanel } from 'primereact/scrollpanel';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
    await sleep(300);
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
                reset,
                values
            }) => {
                return (
                    <div className="new-form-section">
                        <form
                            onSubmit={(event) => {
                                const promise = handleSubmit(event);
                                promise && promise.then(() => {
                                    form.reset();
                                })
                                return promise;
                            }}
                        >
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
                                    onClick={() => addProjects(values)}
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
                                                    <span
                                                        className="remove-fields-button"
                                                        onClick={() => fields.remove(index)}
                                                    >
                                                        <i id="delete-icon" className="pi pi-times"></i>
                                                    </span>
                                                </div>
                                            ))
                                        }
                                    </FieldArray>
                                </ScrollPanel>
                            </div>
                        </form>
                    </div>
                )
            }}
        />
    </div>
)
export default ProjectForm;