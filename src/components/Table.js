import React from 'react';
import { Component } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

class DetailsTable extends Component {

  constructor() {
    super();

    this.DATA_WINDOW_SIZE = 50;

    this.state = {
      dataSize: 5000,
      //   sortField: null,
      //   sortOrder: null,
      //   multiSortMeta: null,
      rows: this.DATA_WINDOW_SIZE,
      // lazy: true,
      // virtualScroll: true,
      totalRecords: 0,
      cars: []
    };

    this.currentRowIndex = 0;
    this.currentRows = 0;

    this.handleClick = this.handleClick.bind(this);
    //this.onVirtualScroll = this.onVirtualScroll.bind(this);
    // this.onSort = this.onSort.bind(this);
  }

  createGridData(dataSize) {
    let d = [];
    for (var i = 0; i < dataSize; i++) {
      d = d.concat([
        {
          "date": i,
          "selectedProject": "selectedProject-" + i,
          "arrivalTime": "arrivalTime-" + i,
          "departureTime": "departureTime-" + i,
          "pause": "pause-" + i,
          "comment": "comment-" + i
        }
      ]);
    }
    this.data5000 = d;
  }

  handleClick(e) {
    const dataSize = parseInt(this.state.dataSize);

    this.createGridData(dataSize);

    //     const useVirtualScroll = (dataSize > this.DATA_WINDOW_SIZE);
    //     this.setState({
    //       cars: this.data5000,
    //       totalRecords: dataSize,
    //       lazy: useVirtualScroll,
    //       virtualScroll: useVirtualScroll,
    //       rows: Math.min(dataSize, this.DATA_WINDOW_SIZE)
    //     });
    //   }

    //   onVirtualScroll(event) {
    //     console.log(["first=", event.first, ", rows=", event.rows].join());

    //     //last chunk
    //     this.setState({
    //       cars: this.loadChunk(event.first, event.rows)
    //     });
  }

  loadChunk(index, length) {
    this.currentRowIndex = Math.max(index, 0);
    this.currentRows = Math.min(index + length, this.state.totalRecords);
    return this.data5000.slice(this.currentRowIndex, this.currentRows);
  }

  //   onSort(e) {
  //     const cmp = (a, b, f) => a[f] < b[f] ? -1 : (a[f] === b[f] ? 0 : 1);

  //     const meta = e.multiSortMeta;
  //     if (Array.isArray(meta)) {
  //       this.data5000.sort((a, b) => {
  //         for (var i = 0; i < meta.length; i++) {
  //           const f = meta[i].field;
  //           const o = meta[i].order;
  //           const result = o * cmp(a, b, f);
  //           if (result !== 0) {
  //             return result;
  //           }
  //         }
  //         return 0;
  //       });

  //       this.setState({
  //         sortField: e.sortField,
  //         sortOrder: e.sortOrder,
  //         multiSortMeta: e.multiSortMeta,
  //         cars: this.data5000.slice(this.currentRowIndex, Math.min(this.currentRowIndex + this.currentRows, this.state.totalRecords))
  //       });
  //     }
  //   }

  loadingText() {
    return <span className="loading-text"></span>;
  }

  render() {
    return (
      <div>
        <span>Number of rows: </span>
        <input type="number" value={this.state.dataSize} onChange={(e) => { this.setState({ dataSize: e.target.value }) }}></input>
        <button value="5000" onClick={this.handleClick}>Set</button>

        <div className="content-section implementation">
          <DataTable
            value={this.state.cars}
            rows={this.state.rows}
            totalRecords={this.state.totalRecords}
          // scrollable={true}
          // scrollHeight="500px"
          // sortMode="multiple"
          // sortField={this.state.sortField}
          // sortOrder={this.state.sortOrder}
          // multiSortMeta={this.state.multiSortMeta}
          // onSort={this.onSort}
          // lazy={this.state.lazy}
          // virtualScroll={this.state.virtualScroll}
          // virtualRowHeight={30}
          // onVirtualScroll={this.onVirtualScroll}
          //first={this.state.first}
          >
            <Column field="date" header="Date" sortable={false} loadingBody={this.loadingText} />
            <Column field="selectedProject" header="Selected Project" sortable={false} loadingBody={this.loadingText} />
            <Column field="arrivalTime" header="Arrival Time" sortable={false} loadingBody={this.loadingText} />
            <Column field="departureTime" header="Departure Time" sortable={false} loadingBody={this.loadingText} />
            <Column field="pause" header="Pause" sortable={false} loadingBody={this.loadingText} />
            <Column field="comment" header="Comment" sortable={false} loadingBody={this.loadingText} />
          </DataTable>

        </div>
      </div>
    );
  }
}

export default DetailsTable;
