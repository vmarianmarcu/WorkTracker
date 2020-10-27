import React from 'react';

const DragTemp = () => (

    <div>
        <div id='external-events'>
            <p>
                <strong>Draggable Events</strong>
            </p>

            <div class='fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event'>
                <div class='fc-event-main'>Meeting</div>
            </div>
            <div class='fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event'>
                <div class='fc-event-main'>Free Day</div>
            </div>
            <div class='fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event'>
                <div class='fc-event-main'>Lounch</div>
            </div>
            <div class='fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event'>
                <div class='fc-event-main'>Happy Hour</div>
            </div>
            <div class='fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event'>
                <div class='fc-event-main'>Dinner</div>
            </div>

            <p>
                <input type='checkbox' id='drop-remove' />
                <label for='drop-remove'>remove after drop</label>
            </p>
        </div>

        <div id='calendar-container'>
            <div id='calendar'></div>
        </div>

    </div>
)

export default DragTemp;