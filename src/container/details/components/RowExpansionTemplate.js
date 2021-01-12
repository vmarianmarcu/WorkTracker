// import React, { Component } from 'react';
// import { TreeTable } from 'primereact/treetable';
// import { Column } from 'primereact/column';
// // import { NodeService } from '../service/NodeService';
// // import './TreeTableDemo.css';

// class rowExpansionTemplate extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             nodes: []
//         };
//         // this.nodeservice = new NodeService();
//         this.nameTemplate = this.nameTemplate.bind(this);
//     }

//     // componentDidMount() {
//     //     this.nodeservice.getTreeTableNodes().then(data => this.setState({nodes: data}));
//     // }

//     nameTemplate({ value }) {
//         return (
//             <React.Fragment>
//                 <span>{`Name`}</span>
//                 <span className="sm-visible">{value.date}</span>
//                 <span className="sm-visible"> {value.arrivalTime}</span>
//             </React.Fragment>
//         )
//     }

//     render() {
//         const { data } = this.props;
//         return (
//             <div className="treetable-responsive-demo">
//                 <div className="card">
//                     <TreeTable value={data} data={data} header="Responsive">
//                         <Column field="name" header="Name" body={this.nameTemplate} expander></Column>
//                         <Column field="size" header="Size" headerClassName="sm-invisible" bodyClassName="sm-invisible"></Column>
//                         <Column field="type" header="Type" headerClassName="sm-invisible" bodyClassName="sm-invisible"></Column>
//                     </TreeTable>
//                 </div>
//             </div>
//         )
//     }
// }



import React from 'react';
import { Column } from 'primereact/column';
import { TreeTable } from 'primereact/treetable';
import { DataTable } from 'primereact/datatable';
import { ScrollPanel } from 'primereact/scrollpanel';

// const nameTemplate = (data) => (
//     // return (
//     <React.Fragment>
//         <span>{`Name`}</span>
//         <span className="sm-visible"> {data.date}</span>
//         <span className="sm-visible"> {data.arrivaltime}</span>
//     </React.Fragment>
//     // )
// )

// const rowExpansionTemplate = ({ data }) => {
//     return (
//         <div className="treetable-responsive-demo">
//             <div className="card">
//                 <span>{`Name`}</span>
//                 <span className="sm-visible"> {data.comment}</span>
//                 <span className="sm-visible"> {data.projectName}</span>
//                 <DataTable value={data} data={data} header="Responsive">
//                     <Column field="name" body={data.projectName} value={data.projectName} header="Name">{data.projectName}</Column>
//                     <Column field="size" header="Size" headerClassName="sm-invisible" bodyClassName="sm-invisible"></Column>
//                     <Column field="type" header="Type" headerClassName="sm-invisible" bodyClassName="sm-invisible"></Column>
//                     <Column field="pause" header="Pause" />
//                     <Column field="comment" header="Comment" />
//                 </DataTable>
//             </div>
//         </div>
//     );
// }

// export default rowExpansionTemplate;

const rowExpansionTemplate = ({ data }) => (
    <div className="scrollpanel-demo">
        <div className="card">
            <div className="p-grid">
                <div className="p-col-12 p-md-4">
                    <ScrollPanel style={{ width: '100%', height: '200px' }} className="custombar2">
                        <div style={{ padding: '1em', lineHeight: '1', width: '600px' }}>
                            <div className="p-grid p-fluid" >
                                <div className="p-col-12 p-md-3">
                                </div>
                                <div className="p-col-12 p-md-9">
                                    <div className="p-grid">
                                        <div className="p-md-2">Date: </div>
                                        <div className="p-md-10 detail-row">{data.date}</div>

                                        <div className="p-md-2">Project Name: </div>
                                        <div className="p-md-10 detail-row">{data.projectName}</div>

                                        <div className="p-md-2">Arrival Time: </div>
                                        <div className="p-md-10 detail-row">{data.arrivalTime}</div>

                                        <div className="p-md-2">Departure Time: </div>
                                        <div className="p-md-10 detail-row">{data.departureTime}</div>

                                        <div className="p-md-2">Pause: </div>
                                        <div className="p-md-10 detail-row">{data.pause}</div>

                                        <div className="p-md-2">Comment: </div>
                                        <div className="p-md-10 detail-row">{data.comment}</div>

                                        <div className="p-md-2">Total: </div>
                                        <div className="p-md-10 detail-row">{data.total}</div>
                                    </div>
                                </div>
                            </div >
                        </div>
                    </ScrollPanel>
                </div>
            </div>
        </div>
    </div>
);

export default rowExpansionTemplate;