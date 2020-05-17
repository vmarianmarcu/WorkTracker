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
                    <Input
                        id="start-event-date"
                        type="text"
                        className="event-title"
                        name={`Event Title`}
                        labelName="Event Title"
                        required
                    />
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
                    <InputTime
                        name={`hourStart`}
                        value={hourStart}
                        placeholder={`Hour Start`}
                        required
                    />
                    <InputTime
                        name={`hourEnd`}
                        value={hourEnd}
                        placeholder={`Hour End`}
                        required
                    />
                    <Button
                        label="SAVE"
                        type="submit"
                        className="p-button-success"
                        icon="pi pi-check"
                        disabled={submitting || pristine}
                    // onClick={() => addProjects()}
                    />
                    <Button
                        label="Reset"
                        type="button"
                        icon="pi pi-undo"
                        onClick={form.reset}
                        disabled={submitting || pristine}
                    />
                </form>
            )
        }}
    />
)
export default AddEvent;