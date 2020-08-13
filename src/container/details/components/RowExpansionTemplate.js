import React from 'react';

const rowExpansionTemplate = ({ data }) => (
    <div className="p-grid p-fluid">
        <div className="p-col-12 p-md-3">
        </div>
        <div className="p-col-12 p-md-9">
            <div className="p-grid">
                <div className="p-md-2">Date: </div>
                <div className="p-md-10 detail-row">{data.date}</div>

                <div className="p-md-2">Project Name: </div>
                <div className="p-md-10 detail-row">{data.projectName}</div>

                <div className="p-md-2">Arrival Time: </div>
                <div className="p-md-10 detail-row">{data.arrivalTime}</div>

                <div className="p-md-2">Departure Time: </div>
                <div className="p-md-10 detail-row">{data.departureTime}</div>

                <div className="p-md-2">Pause: </div>
                <div className="p-md-10 detail-row">{data.pause}</div>

                <div className="p-md-2">Comment: </div>
                <div className="p-md-10 detail-row">{data.comment}</div>
                <div className="p-md-2">Total: </div>
                <div className="p-md-10 detail-row">{data.total}</div>
            </div>
        </div>
    </div>
);

export default rowExpansionTemplate;