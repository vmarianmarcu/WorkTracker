
import React, { Component } from 'react';

class FlexGridDemo extends Component {

    constructor() {
        super();
        this.state = {
            columns: [0, 1, 2, 3, 4, 5]
        };

        this.addColumn = this.addColumn.bind(this);
        this.removeColumn = this.removeColumn.bind(this);
    }

    addColumn() {
        this.setState({
            columns: [...this.state.columns, this.state.columns.length]
        });
    }

    removeColumn() {
        let cols = [...this.state.columns];
        cols.splice(-1, 1);
        this.setState({
            columns: cols
        });
    }

    render() {
        return (
            <div>
                <div className="content-section implementation flexgrid-demo">
                    <h3>Sample Layout</h3>
                    <div className="p-grid sample-layout">
                        <div className="p-col-12 p-md-2">
                            Menu
                        </div>
                        <div className="p-col-12 p-md-10 p-col-nogutter">
                            <div className="p-col-12 p-col-nogutter">
                                Top Bar
                            </div>
                            <div className="p-col-12">
                                <div className="p-grid">
                                    <div className="p-col-12 p-md-6">Phasellus faucibus purus volutpat mauris lacinia sodales. Ut sit amet sapien
                                        facilisis, commodo dui non, fringilla tellus. Quisque tempus facilisis nisi sodales finibus. Pellentesque
                                        neque orci, ullamcorper vitae ligula quis, dignissim euismod augue.</div>
                                    <div className="p-col-12 p-md-6">Fusce ullamcorper congue massa, eget ullamcorper nunc lobortis egestas. Lorem
                                        ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultrices dui eget dolor feugiat dapibus. Aliquam
                                        pretium leo et egestas luctus. Nunc facilisis gravida tellus.</div>
                                </div>
                            </div>
                        </div>
                        <div className="p-col-12">
                            Footer
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FlexGridDemo;
