import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
// import CarService from 'components/CarService';

class DataTableRowGroup extends Component {

    constructor() {
        super();
        this.state = {
            posts: [],
            expandedRows: null,
                workDetails: [
                    { id: '0', date: '01/20/2020', projectName: 'Delphi', arrivalTime: '08:00', departureTime: '17:00', pause: '00:30', comment: 'Text for test' },
                    { id: '1', date: '02/25/2020', projectName: 'iFlex', arrivalTime: '09:30', departureTime: '18:00', pause: '00:30', comment: 'Text for test' },
                    { id: '2', date: '03/31/2020', projectName: 'ISIPP', arrivalTime: '10:45', departureTime: '19:00', pause: '00:30', comment: 'Text for test' },
                    { id: '3', date: '04/23/2020', projectName: 'Delphi Mobile', arrivalTime: '11:15', departureTime: '17:00', pause: '00:30', comment: 'Text for test' },
                    { id: '4', date: '05/02/2020', projectName: 'ISIPP', arrivalTime: '12:20', departureTime: '20:00', pause: '00:30', comment: 'Text for test' },
                    { id: '5', date: '06/17/2020', projectName: 'iFlex', arrivalTime: '13:27', departureTime: '21:00', pause: '00:30', comment: 'Text for test' },
                    { id: '6', date: '07/29/2020', projectName: 'ISIPP', arrivalTime: '14:56', departureTime: '22:00', pause: '00:30', comment: 'Text for test' },
                    { id: '7', date: '08/21/2020', projectName: 'Delphi client', arrivalTime: '10:00', departureTime: '17:00', pause: '00:30', comment: 'Text for test' },
                    { id: '8', date: '09/08/2020', projectName: 'iFlex', arrivalTime: '11:00', departureTime: '16:00', pause: '00:30', comment: 'Text for test' },
                    { id: '9', date: '10/15/2020', projectName: 'ISIPP', arrivalTime: '08:00', departureTime: '17:00', pause: '00:30', comment: 'Text for test' },
                    { id: '10', date: '11/11/2020', projectName: 'Delphi', arrivalTime: '09:00', departureTime: '18:00', pause: '00:30', comment: 'Text for test' },
                    { id: '11', date: '12/22/2020', projectName: 'Delphi Mobile', arrivalTime: '10:00', departureTime: '19:00', pause: '00:30', comment: 'Text for test' }
                ]
        };

    }

    // componentDidMount() {
    //     // const { loadWorkDetails } = this.props;
    //       //this.carservice.getCarsMedium().then(data => this.setState({cars: data}));
    //     // loadWorkDetails.then(data => this.setState({posts: data}));

    // }

    render() {
        const { loadWorkDetails } = this.props;

        return (
            <div className="row-table-content-section">
                <DataTable header="Work Details" value={this.state.workDetails}>
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