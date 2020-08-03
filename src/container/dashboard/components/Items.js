import React from 'react';
import InputTextarea from 'components/InputTextarea';
import Dropdown from 'components/Dropdown';
import InputTime from 'components/InputTime24H';
import InputMask from 'components/InputMask';

const Item = ({ name, index, item, projects }) => (
    <div className={`dynamicContent_${index}`} key={name} >
        <div className="p-grid">
            <div className="p-col-6">
                <span className="p-float-label details-field">
                    <Dropdown
                        id="float-dropdown"
                        name={`${name}.projectName`}
                        // value={}
                        options={projects}
                        labelName="Select a project"
                        required
                    />
                </span>
            </div>
            <div className="p-col-6">
                <span className="p-float-label details-field">
                    <InputMask
                        id="float-mask"
                        className="inputMask"
                        type="time"
                        mask="99:99"
                        name={`${name}.pause`}
                        value={item.pause}
                        required
                        labelName="Pause"
                    />
                </span>
            </div>
        </div>

        <div className="p-grid">
            <div className="p-col-6">
                <span className="p-float-label details-field">
                    <InputTime
                        id="float-input-time"
                        name={`${name}.arrivalTime`}
                        value={item.arrivalTime}
                        labelName="Arrival time"
                        required
                    />
                </span>
            </div>
            <div className="p-col-6">
                <span className="p-float-label details-field">
                    <InputTime
                        id="float-input-time"
                        name={`${name}.departureTime`}
                        value={item.departureTime}
                        labelName="Departure time"
                        required
                    />
                </span>
            </div>
        </div>

        <div className="p-grid">
            <div className="p-col-12">
                <span className="p-float-label details-field">
                    <InputTextarea
                        id="float-input"
                        name={`${name}.textArea`}
                        value={item.comment}
                        rows={1}
                        cols={49}
                        labelName="Comment"
                        required
                    />
                </span>
            </div>
        </div>
    </div>
)

export default Item;
