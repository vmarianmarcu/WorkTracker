import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
// import CarService from 'components/CarService';

class DataTableRowGroup extends Component {

    render() {
        const { loadWorkDetails } = this.props;

        return (
            <div className="row-table-content-section">
                <DataTable header="Work Details" value={loadWorkDetails.payload}>
                    <Column field="date" header="Date" />
                    <Column field="projectName" header="Project Name" />
                    <Column field="arrivalTime" header="Arrival Time" />
                    <Column field="departureTime" header="Departure Time" />
                    <Column field="pause" header="Pause" />
                    <Column field="comment" header="Comment" />
                </DataTable>
            </div>
        );
    }
}

export default DataTableRowGroup;