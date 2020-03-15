import React from 'react';
import INputTextarea from 'components/InputTextarea';
import Dropdown from 'components/Dropdown';
import InputTime from 'components/InputTime24H';
import 'static/dashboard.css';
import Input from 'components/Input';

const Item = ({ item, projects, handleChange, index }) => (
    <div className="dynamicContent">
        <div className="dropdownAndPause">
            <span>
                <div className="dropdown">
                    {projects.pending && <em>Loading users...</em>}
                    {projects.error && <span className="text-danger">ERROR: {projects.error}</span>}
                    <Dropdown id="dropdown" name={`projectName${index}`} value={item.projectName} onChange={handleChange} options={projects.items} />
                </div>
            </span>
            <span>
                <div className="pause">
                    <Input type="time" id="pause" name={`pause${index}`} value={item.pause} placeholder="Pause" onChange={handleChange} />
                </div>
            </span>
        </div>

        <div className="timeSection">
            <span>
                <div className="arrivalTime">
                    <InputTime id="arrivalTime" name={`arrivalTime${index}`} value={item.arrivalTime} placeholder="Arrival time" onChange={handleChange} />
                </div>
            </span>
            <span>
                <div className="departureTime">
                    <InputTime id="departureTime" name={`departureTime${index}`} value={item.departureTime} placeholder="Departure time" onChange={handleChange} />
                </div>
            </span>
        </div>
        <div className="textarea">
            <span>
                <INputTextarea id="textArea" name={`textArea${index}`} value={item.comment} placeholder="Comment" onChange={handleChange} />
            </span>
        </div>
    </div>
)
export default Item;
