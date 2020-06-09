import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";

class DataTableRowGroup extends Component {

    constructor() {
        super();
        this.state = {
            registeredWorkDetails: [],
            selectedWorkRecord: null,
            workRecord: null,
            displayDialog: false
        };

        this.onSave = this.onSave.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onWorkRecordSelect = this.onWorkRecordSelect.bind(this);
        this.addNew = this.addNew.bind(this);
    }

    onSave() {
        let registeredWorkDetails = [...this.state.registeredWorkDetails];
        if (this.newWorkRecord)
            registeredWorkDetails.push(this.state.workRecord);
        else
            registeredWorkDetails[this.findSelectedWorkRecordIndex()] = this.state.workRecord;

        this.setState({ registeredWorkDetails: registeredWorkDetails, selectedWorkRecord: null, workRecord: null, displayDialog: false });
    }

    onDelete() {
        let index = this.findSelectedWorkRecordIndex();
        this.setState({
            registeredWorkDetails: this.state.registeredWorkDetails.filter((val, i) => i !== index),
            selectedWorkRecord: null,
            workRecord: null,
            displayDialog: false
        });
    }

    findSelectedWorkRecordIndex() {
        return this.state.registeredWorkDetails.indexOf(this.state.selectedWorkRecord);
    }

    updateProperty(property, value) {
        let workRecord = this.state.workRecord;
        workRecord[property] = value;
        this.setState({ workRecord: workRecord });
    }

    onWorkRecordSelect(e) {
        this.newWorkRecord = false;
        this.setState({
            displayDialog: true,
            workRecord: Object.assign({}, e.data)
        });
    }

    addNew() {
        this.newWorkRecord = true;
        this.setState({
            workRecord: { date: '', projectName: '', arrivalTime: '', departureTime: '', pause: '', comment: '' },
            displayDialog: true
        });
    }


    render() {
        const { loadWorkDetails } = this.props;

        let header = <div className="p-clearfix" style={{ lineHeight: '1.87em' }}>Work Details</div>;

        let footer = <div className="p-clearfix" style={{ width: '100%' }}>
            <Button style={{ float: 'left' }} label="Add" icon="pi pi-plus" onClick={this.addNew} />
        </div>;

        let dialogFooter = <div className="ui-dialog-buttonpane p-clearfix">
            <Button label="Delete" icon="pi pi-times" onClick={this.onDelete} />
            <Button label="Save" icon="pi pi-check" onClick={this.onSave} />
        </div>;

        return (
            <div className="row-table-content-section">
                <DataTable header={header} footer={footer} value={loadWorkDetails.payload} scrollable={true} scrollHeight="380px"
                    lazy={true} paginator={false} rows={50} selectionMode="single" selection={this.state.selectedWorkRecord}
                    onSelectionChange={e => this.setState({ selectedWorkRecord: e.value })} onRowSelect={this.onWorkRecordSelect} >
                    <Column field="date" header="Date" sortable={false} />
                    <Column field="projectName" header="Project Name" sortable={false} />
                    <Column field="arrivalTime" header="Arrival Time" sortable={false} />
                    <Column field="departureTime" header="Departure Time" sortable={false} />
                    <Column field="pause" header="Pause" sortable={false} />
                    <Column field="comment" header="Comment" sortable={false} />
                </DataTable>

                <Dialog visible={this.state.displayDialog} style={{ width: '300px' }} header="Work Details" modal={true} footer={dialogFooter}
                    onHide={() => this.setState({ displayDialog: false })} blockScroll={false} >
                    {
                        this.state.workRecord &&

                        <div className="p-grid p-fluid">
                            <div className="p-col-4" style={{ padding: '.75em' }}><label htmlFor="date">Date</label></div>
                            <div className="p-col-8" style={{ padding: '.5em' }}>
                                <InputText
                                    id="date"
                                    onChange={(e) => { this.updateProperty('date', e.target.value) }}
                                    value={this.state.workRecord.date}
                                />
                            </div>

                            <div className="p-col-4" style={{ padding: '.75em' }}><label htmlFor="projectName">Project Name</label></div>
                            <div className="p-col-8" style={{ padding: '.5em' }}>
                                <InputText
                                    id="projectName"
                                    onChange={(e) => { this.updateProperty('projectName', e.target.value) }}
                                    value={this.state.workRecord.projectName}
                                />
                            </div>

                            <div className="p-col-4" style={{ padding: '.75em' }}><label htmlFor="arrivalTime">Arrival Time</label></div>
                            <div className="p-col-8" style={{ padding: '.5em' }}>
                                <InputText
                                    id="arrivalTime"
                                    onChange={(e) => { this.updateProperty('arrivalTime', e.target.value) }}
                                    value={this.state.workRecord.arrivalTime}
                                />
                            </div>

                            <div className="p-col-4" style={{ padding: '.75em' }}><label htmlFor="departureTime">Departure Time</label></div>
                            <div className="p-col-8" style={{ padding: '.5em' }}>
                                <InputText
                                    id="departureTime"
                                    onChange={(e) => { this.updateProperty('departureTime', e.target.value) }}
                                    value={this.state.workRecord.departureTime}
                                />
                            </div>

                            <div className="p-col-4" style={{ padding: '.75em' }}><label htmlFor="pause">Pause</label></div>
                            <div className="p-col-8" style={{ padding: '.5em' }}>
                                <InputText
                                    id="pause"
                                    onChange={(e) => { this.updateProperty('pause', e.target.value) }}
                                    value={this.state.workRecord.pause}
                                />
                            </div>

                            <div className="p-col-4" style={{ padding: '.75em' }}><label htmlFor="comment">Comment</label></div>
                            <div className="p-col-8" style={{ padding: '.5em' }}>
                                <InputText
                                    id="comment"
                                    onChange={(e) => { this.updateProperty('comment', e.target.value) }}
                                    value={this.state.workRecord.comment}
                                />
                            </div>
                        </div>
                    }
                </Dialog>
            </div>
        );
    }
}

export default DataTableRowGroup;