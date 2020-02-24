import React, {Component} from 'react';
import {DataTable} from 'primereact/datatable';

class DataTableRowGroup extends Component {

    constructor() {
        super();
        this.state = {
            car: null
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
        return ([
                    <td key={data.brand + '_footerTotalLabel'} colSpan="3" style={{textAlign: 'right'}}>Total Price</td>,
                    <td key={data.brand + '_footerTotalValue'}>{this.calculateGroupTotal(data.brand)}</td>
            ]
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
            <div>
                <DataTable header="SubHeader" value={this.state.cars} rowGroupMode="subheader" sortField="brand" sortOrder={1} groupField="brand"
                    rowGroupHeaderTemplate={this.headerTemplate} rowGroupFooterTemplate={this.footerTemplate}>
                    {/* <Column field="vin" header="Vin" />
                    <Column field="year" header="Year" />
                    <Column field="color" header="Color" />
                    <Column field="price" header="Price" /> */}
                </DataTable>

                <DataTable header="RowSpan" value={this.state.cars} rowGroupMode="rowspan" sortField="brand" sortOrder={1} groupField="brand"
                    style={{marginTop:'30px'}}>
                    {/* <Column field="brand" header="Brand" />
                    <Column field="year" header="Year" />
                    <Column field="color" header="Color" />
                    <Column field="vin" header="Vin" /> */}
                </DataTable>
            </div>
        );
    }
}
export default DataTableRowGroup;