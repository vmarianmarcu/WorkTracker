import format from 'date-fns/format'

export function formatDateTimeISO(date) {
    return format(date, "yyyy-MM-dd'T'HH:mm:ss");
}