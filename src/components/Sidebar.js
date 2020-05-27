import React, { Component, Fragment } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import PanelMenu from './PanelMenu';
import '../static/app.css';

class SidebarComponent extends Component {

    constructor() {
        super();
        this.state = {
            visibleLeft: true
        };
    }

    render() {
        return (
            <Fragment>
                <div className="slidebar">
                    <Sidebar visible={this.state.visibleLeft} baseZIndex={1000000} onHide={(e) => this.setState({ visibleLeft: false })}>
                        <div className="slidebar-title">
                            <h1>Work Tracker</h1>
                        </div>
                        <hr />
                        <br />
                        <PanelMenu />
                    </Sidebar>
                    <div className="show-slidebar-button">
                        <Button icon="pi pi-bars pi" label="Show" onClick={(e) => this.setState({ visibleLeft: true })} />
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default SidebarComponent;