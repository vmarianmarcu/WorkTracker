import React from 'react';

const WorkRecord = () => {

    const total = "325";
    const date = "20.05.2020";
    const projectName = "ISIPP";
    const startWork = "08:00";
    const endWork = "17:00";
    const pouse = "01:00";

    return (
        <div className="work-record">
            <div className="dateAndTotal">
                <div className="totalDayHours">
                    <span>
                        <label>Total:</label>
                        <p>{total}</p>
                    </span>
                </div>
                <div>
                    <span>
                        <label>Date:</label>
                        <p>{date}</p>
                    </span>
                </div>
            </div>
            <div className="work-item">
                <div className="details-project-name">
                    <label>{projectName}</label>
                </div>
                <div className="work-dey-details">
                    <label>{`${startWork} - ${endWork} ${pouse}`}</label>
                </div>
            </div>
        </div>
    );
}
export default WorkRecord;
