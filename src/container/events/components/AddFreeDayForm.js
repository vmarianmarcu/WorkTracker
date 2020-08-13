import React from 'react';
import { Form } from 'react-final-form';
import Input from 'components/InputFloatingLabel';
import Calendar from 'components/Calendar';
import Button from 'components/Button';

import { ScrollPanel } from 'primereact/scrollpanel';
import arrayMutators from 'final-form-arrays';
import { FieldArray } from 'react-final-form-arrays';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
    await sleep(300)
    console.log("Valori: ", values)
}

const FreeDaysForm = ({ title, start, end, addFreeDays }) => (
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
                                    onClick={() => push("freeDayEvent", undefined)}
                                />
                                <Button
                                    label="SAVE"
                                    type="submit"
                                    icon="pi pi-check"
                                    className="p-button-success"
                                    disabled={submitting || pristine}
                                onClick={() => addFreeDays()}
                                />
                                <Button
                                    label="Reset"
                                    type="button"
                                    icon="pi pi-undo"
                                    onClick={form.reset}
                                    disabled={submitting || pristine}
                                />
                            </div>
                            <div className="form-array-free-days">
                                <ScrollPanel className="scroll-panel">
                                    <FieldArray
                                        name="freeDayEvent"
                                    // initialValue={[{ firstName: "test"  }]}
                                    >
                                        {({ fields }) =>
                                            fields.map((name, index) => (
                                                <div className="form-free-days-fields" key={name}>
                                                    <label><strong> Free Day {index + 1} </strong></label>
                                                    <span>
                                                        <div className="p-grid">
                                                            <div className="p-col-6 p-offset-2">
                                                                <Input
                                                                    id="start-event-date"
                                                                    type="text"
                                                                    value={title}
                                                                    className="event-title"
                                                                    name={`event title`}
                                                                    labelName="Event Title"
                                                                    required
                                                                />
                                                            </div>
                                                            <div className="p-col-6 p-offset-2">
                                                                <span className="p-float-label field-margin">
                                                                    <Calendar
                                                                        id="float-calendar"
                                                                        name={`event start`}
                                                                        value={start}
                                                                        labelName={`Date Start`}
                                                                        dateFormat={`yy-mm-dd`}
                                                                        touchUI={false}
                                                                        inline={false}
                                                                        yearNavigator={true}
                                                                        yearRange={`2020:2035`}
                                                                        monthNavigator={true}
                                                                        showIcon={true}
                                                                    />
                                                                </span>
                                                            </div>
                                                            <div className="p-col-6 p-offset-2">
                                                                <span className="p-float-label field-margin">
                                                                    <Calendar
                                                                        id="float-calendar"
                                                                        name={`event end`}
                                                                        value={end}
                                                                        labelName={`Date End`}
                                                                        dateFormat={`yy-mm-dd`}
                                                                        touchUI={false}
                                                                        inline={false}
                                                                        yearNavigator={true}
                                                                        yearRange={`2020:2035`}
                                                                        monthNavigator={true}
                                                                        showIcon={true}
                                                                    />
                                                                </span>
                                                            </div>
                                                        </div>

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
export default FreeDaysForm;