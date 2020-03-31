import React from 'react';
import { Panel } from 'primereact/panel';
import Item from './DashboardForm';
import DeleteItem from './DeleteItem';

const PanelSection = ({ name, projects, dash, onClick }) => (
    <div className="panelSection">
        {
            dash.map((item, index) =>
                <div className="panel">
                    <div>
                        <Panel header={`Project ${index + 1}`} toggleable={true}>
                            <Item name={name} key={index} index={index} item={item} projects={projects} />
                            <DeleteItem onClick={onClick} />
                            <br />
                            <br />
                        </Panel>
                    </div>
                </div>
            )
        }
    </div>
)
export default PanelSection;