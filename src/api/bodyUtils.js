import { formatDateTimeISO } from 'helpers/dates'

function replacer(key, value) {
    if (value && typeof value === 'object') {

        const keys = Object.keys(value);
        keys.forEach((keyItem) => {
            const valueItem = value[keyItem];
            if (valueItem && typeof valueItem.getMonth === 'function') {
                const newItem = new Date(valueItem.valueOf());
                value[keyItem] = newItem;
                value[keyItem].toJSON = function () {
                    return formatDateTimeISO(this);
                };
            }
        });
    }
    return value;
}

export function formatBody(body) {
    return JSON.stringify({...body}, replacer);
}