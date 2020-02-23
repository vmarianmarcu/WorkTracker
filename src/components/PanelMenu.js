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
                   icon:'pi pi-fw pi-pencil',
                   items:[
                      {
                        label:'List',
                        icon:'pi pi-fw pi-bars',
                        url:'/projects'
                      },
                      {
                         label:'Add',
                         icon:'pi pi-fw pi-plus',
                         url:'/projects'
                      },
                      {
                         label:'Delete',
                         icon:'pi pi-fw pi-trash',
                         url: '/projects'
                      }
                   ]
                },
                {
                   label:'Details',
                   icon:'pi pi-fw pi-file'
                },
                {
                   label:'Users',
                   icon:'pi pi-fw pi-user',
                   items:[
                      {
                         label:'New',
                         icon:'pi pi-fw pi-user-plus',

                      },
                      {
                         label:'Delete',
                         icon:'pi pi-fw pi-user-minus',

                      },
                      {
                         label:'Search',
                         icon:'pi pi-fw pi-users',
                         items:[
                            {
                               label:'Filter',
                               icon:'pi pi-fw pi-filter'
                            },
                            {
                               icon:'pi pi-fw pi-bars',
                               label:'List'
                            }
                         ]
                      }
                   ]
                },
                {
                   label:'Events',
                   icon:'pi pi-fw pi-calendar',
                   items:[
                      {
                         label:'Edit',
                         icon:'pi pi-fw pi-pencil',
                         items:[
                            {
                               label:'Save',
                               icon:'pi pi-fw pi-calendar-plus',
                               url:'/events'
                            },
                            {
                               label:'Delete',
                               icon:'pi pi-fw pi-calendar-minus'
                            }
                         ]
                      }
                   ]
                },
                {   label: 'Sign Out', 
                icon: 'pi pi-power-off',
                url: '/login'
               }
             ],
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