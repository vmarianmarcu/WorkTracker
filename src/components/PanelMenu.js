import React, {Component} from 'react';
import {PanelMenu} from 'primereact/panelmenu';

class PAnelMenu extends Component {

    constructor() {
        super();
        this.state = {
            items:[
                  {   
                     label: 'Home', 
                     icon: 'pi pi-fw pi-home',
                     url:'/dashboard'
                  },
                  {
                   label:'Project',
                   icon:'pi pi-fw pi-bars',
                   url:'/projects'
                },
                {
                   label:'Details',
                   icon:'pi pi-fw pi-file',
                   url:'/details'
                },
                {
                   label:'Users',
                   icon:'pi pi-fw pi-users',
                   url:''
                },
                {
                   label:'Events',
                   icon:'pi pi-fw pi-calendar',
                   url:'/events'
                }
            ]
        };
    }

    render() {
        return (
            <div className="content-section implementation">
               <PanelMenu model={this.state.items} /*style={{width:'300px'}}*/ />
            </div>
        );
    }
}
export default PAnelMenu;