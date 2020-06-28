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
    console.log("New users: ", values)
};

const UsersForm = ({ addUser }) => (
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
                        <form onSubmit={
                            handleSubmit
                        }>
                            {/* <form onSubmit={() => {
                                handleSubmit(values).then(reset);
                            }}> */}
                            <div className="form-buttons">
                                <Button
                                    label="Add"
                                    type="button"
                                    icon="pi pi-plus"
                                    onClick={() => push("users", undefined)}
                                />
                                <Button
                                    label="SAVE"
                                    type="submit"
                                    icon="pi pi-check"
                                    className="p-button-success"
                                    disabled={submitting || pristine}
                                    // onSubmit={() => addUser()}
                                    onClick={() => addUser()}
                                />
                                <Button
                                    label="Reset"
                                    type="button"
                                    icon="pi pi-undo"
                                    onClick={form.reset}
                                    disabled={submitting || pristine}
                                />
                            </div>
                            <div className="form-array-users">
                                <ScrollPanel className="scroll-panel">
                                    <FieldArray
                                        name="users"
                                    // initialValue={[{ firstName: "test"  }]}
                                    >
                                        {({ fields }) =>
                                            fields.map((name, index) => (
                                                <div className="form-users-fields" key={name}>
                                                    <label><strong> User {index + 1} </strong></label>
                                                    <span>
                                                        <InputField
                                                            type="text"
                                                            className="first-name"
                                                            name={`${name}.firstName`}
                                                            labelName="FirstName"
                                                            index={index}
                                                            required
                                                        />
                                                        <InputField
                                                            type="text"
                                                            className="last-name"
                                                            name={`${name}.lastName`}
                                                            labelName="LastName"
                                                            index={index}
                                                            required
                                                        />
                                                        <InputField
                                                            type="email"
                                                            className="email"
                                                            name={`${name}.email`}
                                                            labelName="Email Address"
                                                            index={index}
                                                            required
                                                        />
                                                        <InputField
                                                            type="password"
                                                            className="password"
                                                            name={`${name}.password`}
                                                            labelName="Password"
                                                            index={index}
                                                            required
                                                        />
                                                    </span>

                                                    <span
                                                        className="remove-fields-button"
                                                        onClick={() => fields.remove(index)}
                                                    >
                                                        <i id="delete-icon" className="pi pi-times" ></i>
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
export default UsersForm;