import React from 'react';
import InputTextarea from 'components/InputTextarea';
import Dropdown from 'components/Dropdown';
import InputTime from 'components/InputTime24H';
import InputMask from 'components/InputMask';

const Item = ({ name, index, item, projects }) => (
    <div className={`dynamicContent_${index}`} key={name} >
        <div className="dropdownAndPause">
            <span className="p-float-label">
                {/* <div className="dropdown"> */}
                <Dropdown
                    id="float-input"
                    name={`${name}.projectName`}
                    // value={}
                    options={projects}
                    labelName="Select a project"
                    required
                />
                {/* </div> */}
            </span>
            <span className="p-float-label">
                {/* <div className="pause"> */}
                <InputMask
                    id="float-input"
                    className="inputMask"
                    type="time"
                    mask="99:99"
                    name={`${name}.pause`}
                    value={item.pause}
                    required
                    labelName="Pause"
                />
                {/* </div> */}
            </span>
        </div>

        <div className="timeSection">
            <span className="p-float-label">
                {/* <div className="arrivalTime"> */}
                <InputTime
                    id="float-input"
                    name={`${name}.arrivalTime`}
                    value={item.arrivalTime}
                    // placeholder="Arrival time"
                    required
                />
                <label htmlFor="float-input">Arrival time</label>
                {/* </div> */}
            </span>
            <span className="p-float-label">
                {/* <div className="departureTime"> */}
                <InputTime
                    id="float-input"
                    name={`${name}.departureTime`}
                    value={item.departureTime}
                    // placeholder="Departure time"
                    required
                />
                <label htmlFor="float-input">Departure time</label>
                {/* </div> */}
            </span>
        </div>
        {/* <div className="textarea"> */}
            <span className="p-float-label">
                <InputTextarea
                    id="float-input"
                    name={`${name}.textArea`}
                    value={item.comment}
                    rows={1}
                    cols={47}
                    // placeholder="Comment"
                    labelName="Comment"
                    required
                />
            </span>
        {/* </div> */}
    </div>
)

export default Item;
