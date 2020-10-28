import React from 'react';
import { Form } from 'react-final-form';
import Button from 'components/Button';
import InputField from 'components/InputFloatingLabel';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
    await sleep(300);
};

const UsersForm = ({ addUser }) => (
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
                            <div className="form-users-fields">
                                <label><strong> User</strong></label>
                                <span>
                                    <InputField
                                        type="text"
                                        className="first-name"
                                        name={`firstName`}
                                        labelName={`FirstName`}
                                        required
                                    />
                                    <InputField
                                        type="text"
                                        className="last-name"
                                        name={`lastName`}
                                        labelName={`LastName`}
                                        required
                                    />
                                    <InputField
                                        type="email"
                                        className="email"
                                        name={`email`}
                                        labelName={`Email Address`}
                                        required
                                    />
                                    <InputField
                                        type="password"
                                        className="password"
                                        name={`password`}
                                        labelName={"Password"}
                                        required
                                    />
                                </span>
                            </div>
                            <div className="form-buttons">
                                <Button
                                    label="SAVE"
                                    type="submit"
                                    icon="pi pi-check"
                                    className="p-button-success"
                                    disabled={submitting || pristine}
                                    onClick={() => addUser(values)}
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
export default UsersForm;