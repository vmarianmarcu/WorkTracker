import React from 'react';
import Button from 'components/Button';
import { Link } from 'react-router-dom';
import { Form, Field } from "react-final-form";

import { InputText } from "primereact/inputtext";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
    await sleep(300);

    fetch('http://localhost:4000/registredUsers', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
    })
        .then(response => response.json())
        .then(values => {
            console.log('Success:', values);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};

const RegisterForm = ({ registerUser }) => (
    <div className='containerRegister'>
        <h3>Sign up</h3>
        <Form
            onSubmit={onSubmit}
            validate={values => {
                const errors = {}
                if (!values.firstName) {
                    errors.firstName = 'Required'
                }
                if (!values.lastName) {
                    errors.lastName = 'Required'
                }
                if (!values.email) {
                    errors.email = 'Required'
                }
                if (!values.password) {
                    errors.password = 'Required'
                }
                if (!values.confirm) {
                    errors.confirm = 'Required'
                } else if (values.confirm !== values.password) {
                    errors.confirm = 'Must match'
                }
                return errors
            }}
            render={({
                handleSubmit,
                form,
                submitting,
                pristine,
                values
            }) => (
                    <form
                        // onSubmit={handleSubmit}
                        onSubmit={(event) => {
                            const promise = handleSubmit(event);
                            promise && promise.then(() => {
                                form.reset();
                            })
                            return promise;
                        }}
                    >
                        <div className="form-group">
                            <Field name="firstName">
                                {({ input, meta }) => (
                                    <div>
                                        <i className="pi pi-user-edit" id="icon-size"></i>
                                        <InputText
                                            {...input}
                                            type="text"
                                            placeholder="FirstName*"
                                            value={input.value}
                                            name={input.name}
                                            required
                                            onChange={event => input.onChange(event)}
                                        />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                        </div>
                        <div className="form-group">
                            <Field name="lastName">
                                {({ input, meta }) => (
                                    <div>
                                        <i className="pi pi-user-edit" id="icon-size"></i>
                                        <InputText
                                            {...input}
                                            type="text"
                                            placeholder="LastName*"
                                            value={input.value}
                                            name={input.name}
                                            required
                                            onChange={event => input.onChange(event)}
                                        />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                        </div>
                        <div className="form-group">
                            <Field name="email">
                                {({ input, meta }) => (
                                    <div>
                                        <i className="pi pi-envelope" id="icon-size"></i>
                                        <InputText
                                            {...input}
                                            type="email"
                                            placeholder="Email Address*"
                                            value={input.value}
                                            name={input.name}
                                            required
                                            onChange={event => input.onChange(event)}
                                        />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                        </div>
                        <div className="form-group">
                            <Field name="password">
                                {({ input, meta }) => (
                                    <div>
                                        <i className="pi pi-key" id="icon-size"></i>
                                        <InputText
                                            {...input}
                                            type="password"
                                            placeholder="Password*"
                                            value={input.value}
                                            name={input.name}
                                            required
                                            onChange={event => input.onChange(event)}
                                        />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                        </div>
                        <div className="form-group">
                            <Field name="confirm">
                                {({ input, meta }) => (
                                    <div>
                                        <i className="pi pi-key" id="icon-size"></i>
                                        <InputText
                                            {...input}
                                            type="password"
                                            placeholder="Confirm Password*"
                                            value={input.value}
                                            name={input.name}
                                            required
                                            onChange={event => input.onChange(event)}
                                        />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                        </div>
                        <div className="form-group-link">
                            <Button
                                type="submit"
                                label="SIGN UP"
                                disabled={submitting || pristine}
                                onClick={() => registerUser()} />

                            <p className="linkToRegister"> Already have an account? <Link to="login">Sign in</Link></p>
                        </div>
                    </form>
                )}
        />
    </div>
)
export default RegisterForm;
