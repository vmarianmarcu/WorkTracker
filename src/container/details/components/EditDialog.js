import React, { Fragment } from 'react';
import { Dialog } from 'primereact/dialog';
import Input from 'components/Input';

const EditDialog = ({
    visible,
    footer,
    onHide,
    product,
    dateValue,
    dateChange,
    projectNameValue,
    projectNameChange,
    arrivalTimeValue,
    arrivalTimeChange,
    departureTimeValue,
    departureTimeChange,
    pauseValue,
    pauseChange,
    commentValue,
    commentChange
}) => (

        <Fragment>
            <Dialog
                visible={visible}
                style={{ width: '450px' }}
                className={`p-fluid dialog-width`}
                header="Work Details"
                modal={true}
                footer={footer}
                onHide={onHide}
                blockScroll={false}
            >
                {
                    product &&

                    <div className="p-grid p-fluid">
                        <div className="p-col-4"><label htmlFor="date">Date</label></div>
                        <div className="p-col-8">
                            <Input
                                id="date"
                                type="text"
                                required
                                autoFocus
                                value={dateValue}
                                onChange={dateChange}
                            />
                        </div>
                        <div className="p-col-4"><label htmlFor="projectName">Project Name</label></div>
                        <div className="p-col-8">
                            <Input
                                type="text"
                                id="projectName"
                                required
                                autoFocus
                                value={projectNameValue}
                                onChange={projectNameChange}
                            />
                        </div>

                        <div className="p-col-4"><label htmlFor="arrivalTime">Arrival Time</label></div>
                        <div className="p-col-8">
                            <Input
                                id="arrivalTime"
                                type="text"
                                required
                                autoFocus
                                value={arrivalTimeValue}
                                onChange={arrivalTimeChange}
                            />
                        </div>

                        <div className="p-col-4"><label htmlFor="departureTime">Departure Time</label></div>
                        <div className="p-col-8">
                            <Input
                                id="departureTime"
                                type="text"
                                required
                                autoFocus
                                value={departureTimeValue}
                                onChange={departureTimeChange}
                            />
                        </div>
                        <div className="p-col-4"><label htmlFor="pause">Pause</label></div>
                        <div className="p-col-8">
                            <Input
                                id="pause"
                                type="text"
                                required
                                autoFocus
                                value={pauseValue}
                                onChange={pauseChange}
                            />
                        </div>
                        <div className="p-col-4"><label htmlFor="comment">Comment</label></div>
                        <div className="p-col-8">
                            <Input
                                id="comment"
                                type="text"
                                required
                                autoFocus
                                value={commentValue}
                                onChange={commentChange}
                            />
                        </div>
                    </div>
                }
            </Dialog>
        </Fragment>
    );

export default EditDialog;