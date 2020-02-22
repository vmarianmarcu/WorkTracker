import React, { Component } from 'react';
import {TabMenu} from 'primereact/tabmenu';

class TAbMenu extends Component {

    constructor() {
        super();
        this.state = {
            items: [
                {label: 'Home', icon: 'pi pi-fw pi-home', url: '/dashboard'},
                {label: 'Projects', icon: '', url: '/projects'},
                {label: 'Details', icon: 'pi pi-fw pi-calendar', url: '/details'},
                {label: 'Users',
                 icon: 'pi pi-fw pi-user',
                 items:[
                    {
                       label:'New',
                       icon:'pi pi-fw pi-user-plus'
                    }
                
                 ]
                },

                {label: 'Logout', icon: 'pi pi-power-off', url: '/login'}
            ]
        };
    }

    render() {
        return(
            <div>
                <TabMenu model={this.state.items} />
            </div>
        );
    }
}
export default TAbMenu;