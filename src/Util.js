import moment from 'moment';

export const parseReadableDay = (timestamp) => {
    return moment.unix(timestamp).format('M/D');
}