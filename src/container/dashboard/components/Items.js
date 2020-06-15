import React from 'react';
import InputTextarea from 'components/InputTextarea';
import Dropdown from 'components/Dropdown';
import InputTime from 'components/InputTime24H';
import InputMask from 'components/InputMask';

const Item = ({ name, index, item, projects }) => (
    <div className={`dynamicContent_${index}`} key={name} >
        <div className="dropdownAndPause">
            <span>
                <div className="dropdown">
                    {projects.pending && <em>Loading users...</em>}
                    {projects.error && <span className="text-danger">ERROR: {projects.error}</span>}
                    <Dropdown
                        name={`${name}.projectName`}
                        // value={}
                        options={projects}
                        required
                    />
                </div>
            </span>
            <span>
                <div className="pause">
                    <InputMask
                        className="inputMask"
                        type="time"
                        name={`${name}.pause`}
                        value={item.pause}
                        placeholder="Pause"
                        required
                    />
                </div>
            </span>
        </div>

        <div className="timeSection">
            <span>
                <div className="arrivalTime">
                    <InputTime
                        name={`${name}.arrivalTime`}
                        value={item.arrivalTime}
                        placeholder="Arrival time"
                        required
                    />
                </div>
            </span>
            <span>
                <div className="departureTime">
                    <InputTime
                        name={`${name}.departureTime`}
                        value={item.departureTime}
                        placeholder="Departure time"
                        required
                    />
                </div>
            </span>
        </div>
        <div className="textarea">
            <span>
                <InputTextarea
                    name={`${name}.textArea`}
                    value={item.comment}
                    placeholder="Comment"
                    required
                />
            </span>
        </div>
    </div>
)

export default Item;
