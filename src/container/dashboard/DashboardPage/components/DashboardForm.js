import React from 'react';
import InputTextarea from 'components/InputTextarea';
import Dropdown from 'components/Dropdown';
import InputTime from 'components/InputTime24H';
import InputMask from 'components/InputMask';
import 'static/dashboard.css';

const Item = ({ index, item, projects }) => (
    <div className={`dynamicContent${index}`}>
        <div className="dropdownAndPause">
            <span>
                <div className="dropdown">
                    {projects.pending && <em>Loading users...</em>}
                    {projects.error && <span className="text-danger">ERROR: {projects.error}</span>}
                    <Dropdown name={`projectName${index}`} value={item.projectName} options={projects.items} required />
                </div>
            </span>
            <span>
                <div className="pause">
                    <InputMask className="inputMask" type="time" name={`pause${index}`} value={item.pause}  placeholder="Pause" required />
                </div>
            </span>
        </div>

        <div className="timeSection">
            <span>
                <div className="arrivalTime">
                    <InputTime name={`arrivalTime${index}`} value={item.arrivalTime} placeholder="Arrival time" required />
                </div>
            </span>
            <span>
                <div className="departureTime">
                    <InputTime name={`departureTime${index}`} value={item.departureTime} placeholder="Departure time" required />
                </div>
            </span>
        </div>
        <div className="textarea">
            <span>
                <InputTextarea name={`textArea${index}`} value={item.comment} placeholder="Comment" required />
            </span>
        </div>
    </div>
)
export default Item;
