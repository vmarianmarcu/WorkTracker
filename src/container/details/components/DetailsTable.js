import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import Input from 'components/Input';

const DetailsTable = ({ loadWorkDetails }) => {

    const [registrations, setRegistrations] = useState([]);
    const [selectedRegistration, setSelectedRegistration] = useState(null);
    const [registration, setRegistration] = useState(null);
    const [displayDialog, setDisplayDialog] = useState(false);

    let newRegistration = false;

    const onSave = () => {
        let _registrations = [...registrations];
        if (newRegistration)
            _registrations.push(registration)
        else
            _registrations[findSelectedRegistrationIndex()] = registration

        setRegistrations(registrations);
        setSelectedRegistration(null);
        setRegistration(null);
        setDisplayDialog(false);

    }

    const onDelete = () => {
        let index = findSelectedRegistrationIndex();

        setRegistrations(registrations.filter((val, i) => i !== index));
        setSelectedRegistration(null);
        setRegistration(null);
        setDisplayDialog(false);

    }

    const findSelectedRegistrationIndex = () => {
        return registrations.indexOf(selectedRegistration)
    }

    const updateProperty = (property, value) => {
        registration[property] = value;
        setRegistration(registration);
    }

    const onRegistrationSelect = (e) => {
        newRegistration = false;

        setRegistration(Object.assign({}, e.data));
        setDisplayDialog(true);
    }

    const header = <div className="p-clearfix">Work Details</div>;

    const dialogFooter = <div className="ui-dialog-buttonpane p-clearfix">
        <Button label="Delete" icon="pi pi-times" onClick={onDelete} />
        <Button label="Save" icon="pi pi-check" onClick={onSave} />
    </div>;

    return (
        <div className="table-section">
            <DataTable
                // value={registrations}
                value={loadWorkDetails.payload}
                paginator={true}
                rows={13}
                header={header}
                selectionMode="single"
                selection={selectedRegistration}
                onSelectionChange={e => setSelectedRegistration(e.value)}
                onRowSelect={onRegistrationSelect}
            >
                <Column field="date" header="Date" sortable={true} filter={true} filterPlaceholder={`Search By Date`} />
                <Column field="projectName" header="Project Name" sortable={true} filter={true} filterPlaceholder={`Search By Name`} />
                <Column field="arrivalTime" header="Arrival Time" />
                <Column field="departureTime" header="Departure Time" />
                <Column field="pause" header="Pause" />
                <Column field="comment" header="Comment" />
                <Column field="total" header="Total" />
            </DataTable>

            <Dialog
                visible={displayDialog}
                className={`dialog-width`}
                header="Work Details"
                modal={true}
                footer={dialogFooter}
                onHide={() => setDisplayDialog(false)}
                blockScroll={false}
            >
                {
                    registration &&

                    <div className="p-grid p-fluid">
                        <div className="p-col-4"><label htmlFor="date">Date</label></div>
                        <div className="p-col-8">
                            <Input
                                id="date"
                                type="text"
                                onChange={(e) => { updateProperty('date', e.target.value) }}
                                value={registration.date}
                            />
                        </div>

                        <div className="p-col-4"><label htmlFor="projectName">Project Name</label></div>
                        <div className="p-col-8">
                            <Input
                                type="text"
                                id="projectName"
                                onChange={(e) => { updateProperty('projectName', e.target.value) }}
                                value={registration.projectName}
                            />
                        </div>

                        <div className="p-col-4"><label htmlFor="arrivalTime">Arrival Time</label></div>
                        <div className="p-col-8">
                            <Input
                                id="arrivalTime"
                                type="text"
                                onChange={(e) => { updateProperty('arrivalTime', e.target.value) }}
                                value={registration.arrivalTime}
                            />
                        </div>

                        <div className="p-col-4"><label htmlFor="departureTime">Departure Time</label></div>
                        <div className="p-col-8">
                            <Input
                                id="departureTime"
                                type="text"
                                onChange={(e) => { updateProperty('departureTime', e.target.value) }}
                                value={registration.departureTime}
                            />
                        </div>
                        <div className="p-col-4"><label htmlFor="pause">Pause</label></div>
                        <div className="p-col-8">
                            <Input
                                id="pause"
                                type="text"
                                onChange={(e) => { updateProperty('pause', e.target.value) }}
                                value={registration.pause}
                            />
                        </div>
                        <div className="p-col-4"><label htmlFor="comment">Comment</label></div>
                        <div className="p-col-8">
                            <Input
                                id="comment"
                                type="text"
                                onChange={(e) => { updateProperty('comment', e.target.value) }}
                                value={registration.comment}
                            />
                        </div>
                    </div>
                }

            </Dialog>
        </div>
    );
}
export default DetailsTable;
