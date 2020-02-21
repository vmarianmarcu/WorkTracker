import React, {Component} from 'react';
import {Sidebar} from 'primereact/sidebar';
import {Button} from 'primereact/button';
import Accordion from './Accordion'

class SidebarDemo extends Component {

    constructor() {
        super();
        this.state = {
            visibleLeft: true
        };
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Sidebar</h1>
                        <p>Sidebar </p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Sidebar visible={this.state.visibleLeft} baseZIndex={1000000} onHide={(e) => this.setState({visibleLeft: false})}>
                        <h1 style={{fontWeight:'normal'}}>Left Sidebar</h1>
                        {/* <Button type="button" onClick={(e) => this.setState({visibleLeft: false})} label="Save" className="p-button-success" style={{marginRight:'.25em'}} />
                        <Button type="button" onClick={(e) => this.setState({visibleLeft: false})} label="Cancel" className="p-button-secondary"/> */}


                        {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                        <Accordion />
                        
                        {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}



                   </Sidebar>
                    <Button icon="pi pi-arrow-right" onClick={(e) => this.setState({visibleLeft:true})} style={{marginRight:'.25em'}} />
                </div>

                {/* <SidebarDoc/> */}

            </div>
        )
    }
}
export default SidebarDemo;