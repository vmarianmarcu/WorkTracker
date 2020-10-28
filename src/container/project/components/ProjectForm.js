import React from 'react';
import { Form } from 'react-final-form';
import Button from 'components/Button';
import InputField from 'components/InputFloatingLabel';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
    await sleep(300);
};

const ProjectForm = ({ addProjects }) => (
    <div className="form-position">
        <Form
            onSubmit={onSubmit}
            render={({
                handleSubmit,
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
                            <div className="form-projects-fields">
                                <InputField
                                    id="float-input"
                                    type="text"
                                    name="name"
                                    labelName="Project name"
                                    required
                                />
                            </div>
                            <div className="form-buttons">
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
                        </form>
                    </div>
                )
            }}
        />
    </div>
)
export default ProjectForm;