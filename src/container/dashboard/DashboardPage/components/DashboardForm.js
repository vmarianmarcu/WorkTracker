import React from 'react';
import InputTextarea from 'components/InputTextarea';
import Dropdown from 'components/Dropdown';
import InputTime from 'components/InputTime24H';
import 'static/dashboard.css';
import Input from 'components/InputField';

const Item = ({ item, projects }) => (
    <div className="dynamicContent">
        <div className="dropdownAndPause">
            <span>
                <div className="dropdown">
                    {projects.pending && <em>Loading users...</em>}
                    {projects.error && <span className="text-danger">ERROR: {projects.error}</span>}
                    <Dropdown name="projectName" value={item.projectName} options={projects.items} required />
                </div>
            </span>
            <span>
                <div className="pause">
                    <Input type="time" name="pause" value={item.pause} placeholder="Pause" required />
                </div>
            </span>
        </div>

        <div className="timeSection">
            <span>
                <div className="arrivalTime">
                    <InputTime name="arrivalTime" value={item.arrivalTime} placeholder="Arrival time" required />
                </div>
            </span>
            <span>
                <div className="departureTime">
                    <InputTime name="departureTime" value={item.departureTime} placeholder="Departure time" required />
                </div>
            </span>
        </div>
        <div className="textarea">
            <span>
                <InputTextarea name="textArea" value={item.comment} placeholder="Comment" required />
            </span>
        </div>
    </div>
)
export default Item;
