import React from 'react';
import InputTextarea from 'components/InputTextarea';
import Dropdown from 'components/Dropdown';
import InputTime from 'components/InputTime24H';
import InputMask from 'components/InputMask';
import Button from 'components/Button';

const Item = ({ name, index, item, projects, onClick }) => (
    <div className={`dynamicContent_${index}`} key={name} >
        <div className="p-grid">
            <div className="p-col-6">
                <span className="p-float-label field-margin">
                    <Dropdown
                        id="float-dropdown"
                        name={`${name}.projectName`}
                        // value={}
                        options={projects}
                        placeholder="Select a project"
                        // labelName="Select a project"
                        required
                    />
                </span>
            </div>
            <div className="p-col-6">
                <span className="p-float-label field-margin">
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
                <span className="p-float-label field-margin">
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
                <span className="p-float-label field-margin">
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
                <span className="p-float-label field-margin">
                    <InputTextarea
                        id="float-input"
                        className={`comment`}
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

        <div className="p-grid" id="deleteItemButton">
            <div className="p-col-12">
                <Button
                    key={index}
                    className={`p-button-rounded p-button-danger deleteItemButton`}
                    type="button"
                    icon="pi pi-times"
                    onClick={onClick}
                />
            </div>
        </div>

    </div>
)

export default Item;
