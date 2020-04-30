import React, { Component } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
// import CarService from 'components/CarService';

class DataTableRowGroup extends Component {

    constructor() {
        super();
        this.state = {
            car: null,
            expandedRows: null
        };

        // this.carservice = new CarService()
        this.headerTemplate = this.headerTemplate.bind(this);
        this.footerTemplate = this.footerTemplate.bind(this);
    }

    componentDidMount() {
        // this.carservice.getCarsMedium().then(data => this.setState({cars: data}));
    }

    headerTemplate(data) {
        return data.brand;
    }

    footerTemplate(data, index) {
        return (
            <React.Fragment>
                <td key={data.brand + '_footerTotalLabel'} colSpan="3" style={{textAlign: 'right'}}>Total Price</td>
                <td key={data.brand + '_footerTotalValue'}>{this.calculateGroupTotal(data.brand)}</td>
            </React.Fragment>
        );
    }

    calculateGroupTotal(brand) {
        let total = 0;

        if(this.state.cars) {
            for(let car of this.state.cars) {
                if(car.brand === brand) {
                    total += car.price;
                }
            }
        }

        return total;
    }

    render() {
        return (
            <React.Fragment>
                <div className="row-table-content-section">
                    <DataTable header="Work Details" value={this.state.cars} rowGroupMode="subheader" sortField="brand" sortOrder={1} groupField="brand"
                        rowGroupHeaderTemplate={this.headerTemplate} rowGroupFooterTemplate={this.footerTemplate}
                        expandableRowGroups={true} expandedRows={this.state.expandedRows} onRowToggle={(e) => this.setState({expandedRows:e.data})}>
                        <Column field="date" header="Date" />
                        <Column field="projectName" header="Project Name" />
                        <Column field="arrivalTime" header="Arrival Time" />
                        <Column field="departureTime" header="Departure Time" />
                        <Column field="pause" header="Pause" />
                        <Column field="comment" header="Comment" />
                    </DataTable>
                </div>
            </React.Fragment>
        );
    }
}

export default DataTableRowGroup;