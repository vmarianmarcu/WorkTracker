import React from 'react';
import Calendar from 'components/Calendar';

const Datepicker = ({ value }) => (
    <div>
        <Calendar
            className="datepicker"
            name="date"
            value={value}
            placeholder={`Date`}
            touchUI={false}
            inline={true}
            yearNavigator={true}
            yearRange={`2020:2035`}
            monthNavigator={true}
            showIcon={false}
            showButtonBar={true}
            required={true}
        />
    </div>
)
export default Datepicker;