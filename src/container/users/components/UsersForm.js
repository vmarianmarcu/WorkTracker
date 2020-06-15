import React from 'react';
import { Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { FieldArray } from 'react-final-form-arrays';
import Button from 'components/Button';
import InputField from 'components/InputField';
import { ScrollPanel } from 'primereact/scrollpanel';
import { Panel } from 'primereact/panel';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
    await sleep(300);
    // window.alert(JSON.stringify(values, 0, 2));
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
                        <Panel header={`Add User`} toggleable={true}>
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
                                                                // id="float-input"
                                                                type="text"
                                                                className="first-name"
                                                                name={`${name}.firstName`}
                                                                labelName="FirstName"
                                                                index={index}
                                                                required
                                                            />
                                                            <InputField
                                                                // id="float-input"
                                                                type="text"
                                                                className="last-name"
                                                                name={`${name}.lastName`}
                                                                labelName="LastName"
                                                                index={index}
                                                                required
                                                            />
                                                            <InputField
                                                                // id="float-input"
                                                                type="email"
                                                                className="email"
                                                                name={`${name}.email`}
                                                                labelName="Email Address"
                                                                index={index}
                                                                required
                                                            />
                                                            <InputField
                                                                // id="float-input"
                                                                type="password"
                                                                className="password"
                                                                name={`${name}.password`}
                                                                labelName="Password"
                                                                index={index}
                                                                required
                                                            />
                                                        </span>

                                                        <span
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
export default UsersForm;