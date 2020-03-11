import React, {Component} from 'react';
import {Sidebar} from 'primereact/sidebar';
import {Button} from 'primereact/button';
import PanelMenu from './PanelMenu';

class SIdebar extends Component {

    constructor() {
        super();
        this.state = {
            visibleLeft: true
        };
    }

    render() {
        return (
            <div>

                <div className="content-section implementation">
                    <Sidebar visible={this.state.visibleLeft} baseZIndex={1000000} onHide={(e) => this.setState({visibleLeft: false})}>
                        {/* <h1 style={{fontWeight:'normal'}}>Left Sidebar</h1> */}
                        <br/>
                        <PanelMenu />
                   </Sidebar>
                    <Button icon="pi pi-bars pi" label="Show" onClick={(e) => this.setState({visibleLeft:true})} style={{marginRight:'.25em'}} />
                </div>
            </div>
        )
    }
}
export default SIdebar;