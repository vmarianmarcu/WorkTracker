import React, { Fragment } from 'react';
import { Panel } from 'primereact/panel';
import Items from './Items';
import Button from 'components/Button';

const PanelSection = ({ index, name, projects, dash, onClick }) => (
    <Fragment>
        {
            dash.map((item) =>
                <div className="details-work-section">
                    <Panel header={`Project ${index + 1}`} toggleable={true}>
                        <Items
                            name={name}
                            index={index}
                            item={item}
                            projects={projects}
                        />
                        <Button
                            key={index}
                            className={`deleteItemButton p-button-danger`}
                            type="button"
                            icon="pi pi-times"
                            onClick={onClick}
                        />
                    </Panel>
                </div>
            )
        }
    </Fragment>
)

export default PanelSection;
