import React from 'react';
import Calendar from 'components/Calendar';

const Datepicker = ({ value }) => (
    <div className="datepicker">
        <Calendar id="calendar"
            name="date"
            value={value}
            placeholder="Date"
        />
    </div>
)

export default Datepicker;
