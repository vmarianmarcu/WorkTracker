import React, { Fragment } from 'react';
import { Panel } from 'primereact/panel';
import Items from './Items';
import DeleteItem from './DeleteItem';

const PanelSection = ({ index, name, projects, dash, onClick }) => (
    <Fragment>
        {
            dash.map((item) =>
                <div>
                    <Panel header={`Project ${index + 1}`} toggleable={true}>
                        <Items name={name} index={index} item={item} projects={projects} />
                        <DeleteItem onClick={onClick} />
                    </Panel>
                </div>
            )
        }
    </Fragment>
)

export default PanelSection;
