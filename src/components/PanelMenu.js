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
                   icon:'pi pi-folder-open',
                   url:'/projects'
                },
                {
                   label:'Details',
                   icon:'pi pi-info-circle',
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
                },
                {  label: 'Sign Out', 
                   icon: 'pi pi-sign-out',
                   url: '/login'
                }
            ]
        };
    }

    render() {
        return (
            <div className="panelMenu">
               <PanelMenu model={this.state.items} />
            </div>
        );
    }
}
export default PAnelMenu;