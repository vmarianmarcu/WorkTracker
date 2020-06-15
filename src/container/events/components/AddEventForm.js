import React from 'react';
import { Form } from 'react-final-form';
import Input from 'components/InputFloatingLabel';
import Calendar from 'components/Calendar';
// import InputTime from 'components/InputTime24H';
import Button from 'components/Button';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
    await sleep(300)
    console.log("Valori: ", values)
}

const AddEvent = ({ title, start, end, addEvent /*, hourStart, hourEnd */ }) => (
    <Form
        onSubmit={onSubmit}
        // initialValues={{}}
        render={({
            handleSubmit,
            submitting,
            pristine,
            form,
            reset,
            values
        }) => {
            return (
                <form name="form" onSubmit={
                    handleSubmit
                }>
                    {/* <form onSubmit={() => {
                     handleSubmit(values).then(reset);
                 }}> */}
                    <div className="p-grid">
                        <div className="p-col-6 p-offset-2">
                            <Input
                                id="start-event-date"
                                type="text"
                                value={title}
                                className="event-title"
                                name={`Event Title`}
                                labelName="Event Title"
                                required
                            />
                        </div>
                        <div className="p-col-6 p-offset-2">
                            <Calendar
                                id="end-event-date"
                                name={`start`}
                                value={start}
                                placeholder={`Date Start`}
                                dateFormat={`yy-mm-dd`}
                                touchUI={false}
                                inline={false}
                                yearNavigator={true}
                                yearRange={`2020:2035`}
                                monthNavigator={true}
                                showIcon={true}
                            />
                        </div>
                        <div className="p-col-6 p-offset-2">
                            <Calendar
                                id="calendar"
                                name={`end`}
                                value={end}
                                placeholder={`Date End`}
                                dateFormat={`yy-mm-dd`}
                                touchUI={false}
                                inline={false}
                                yearNavigator={true}
                                yearRange={`2020:2035`}
                                monthNavigator={true}
                                showIcon={true}
                            />
                        </div>
                        {/* <div className="p-col-6 p-offset-2">
                            <InputTime
                                name={`hourStart`}
                                value={hourStart}
                                placeholder={`Hour Start`}
                                required
                            />
                        </div>
                        <div className="p-col-6 p-offset-2">
                            <InputTime
                                name={`hourEnd`}
                                value={hourEnd}
                                placeholder={`Hour End`}
                                required
                            />
                        </div> */}
                        <div className="p-col-4 p-offset-2">
                            <Button
                                label="SAVE"
                                type="submit"
                                className="p-button-success"
                                icon="pi pi-check"
                                disabled={submitting || pristine}
                                onClick={() => addEvent()}
                            />
                        </div>
                        <div className="p-col-4">
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