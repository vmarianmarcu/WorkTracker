import React from 'react';
import { Form } from 'react-final-form';
import Input from 'components/InputFloatingLabel';
import Calendar from 'components/Calendar';
import InputTime from 'components/InputTime24H';
import Button from 'components/Button';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
    await sleep(300)
    window.alert(JSON.stringify(values, 0, 2))
    console.log("Valori: ", values)
}

const AddEvent = ({ dateStart, dateEnd, hourStart, hourEnd }) => (
    <Form
        onSubmit={onSubmit}
        // initialValues={{}}
        render={({
            handleSubmit,
            submitting,
            pristine,
            form,
            values
        }) => {
            return (
                <form onSubmit={handleSubmit}>
                    <div class="p-grid">
                        <div class="p-col-6 p-offset-3">
                            <Input
                                id="start-event-date"
                                type="text"
                                className="event-title"
                                name={`Event Title`}
                                labelName="Event Title"
                                required
                            />
                        </div>
                        <div class="p-col-6 p-offset-3">
                            <Calendar
                                id="end-event-date"
                                name={`dateStart`}
                                value={dateStart}
                                placeholder={`Date Start`}
                                touchUI={false}
                                inline={false}
                                yearNavigator={true}
                                yearRange={`2020:2035`}
                                monthNavigator={true}
                                showIcon={true}
                            />
                        </div>
                        <div class="p-col-6 p-offset-3">
                            <Calendar
                                id="calendar"
                                name={`dateEnd`}
                                value={dateEnd}
                                placeholder={`Date End`}
                                touchUI={false}
                                inline={false}
                                yearNavigator={true}
                                yearRange={`2020:2035`}
                                monthNavigator={true}
                                showIcon={true}
                            />
                        </div>
                        <div class="p-col-6 p-offset-3">
                            <InputTime
                                name={`hourStart`}
                                value={hourStart}
                                placeholder={`Hour Start`}
                                required
                            />
                        </div>
                        <div class="p-col-6 p-offset-3">
                            <InputTime
                                name={`hourEnd`}
                                value={hourEnd}
                                placeholder={`Hour End`}
                                required
                            />
                        </div>
                        <div class="p-col-4 p-offset-2">
                            <Button
                                label="SAVE"
                                type="submit"
                                className="p-button-success"
                                icon="pi pi-check"
                                disabled={submitting || pristine}
                            // onClick={() => addProjects()}
                            />
                        </div>
                        <div class="p-col-4">
                            <Button
                                label="Reset"
                                type="button"
                                icon="pi pi-undo"
                                onClick={form.reset}
                                disabled={submitting || pristine}
                            />
                        </div>
                    </div>
                </form >
            )
        }}
    />
)
export default AddEvent;