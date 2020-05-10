import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
// import CarService from 'components/CarService';

class DataTableRowGroup extends Component {

    constructor() {
        super();
        this.state = {
            posts: [],
            expandedRows: null
        };

    }

    componentDidMount() {
        const { loadWorkDetails } = this.props;

    }

    render() {

       
        return (
            <div className="row-table-content-section">
                <DataTable header="Work Details" value={this.state.posts} rowGroupMode="subheader" sortField="id" sortOrder={1}
                    groupField="id" expandableRowGroups={true} expandedRows={this.state.expandedRows} onRowToggle={(e) => this.setState({ expandedRows: e.loadWorkDetails })}>
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