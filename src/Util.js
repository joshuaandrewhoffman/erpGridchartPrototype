import moment from 'moment';

export const parseReadableDay = (timestamp) => {
    return moment.unix(timestamp).format('M/D');
}

export const parseReadableColumn = (columnRaw) => {
    let columnWords = columnRaw.split('_');
    if (columnWords.length === 1) {
        return capitalizeFirstLetter(columnWords[0]);
    }
    else {
        let result = "";
        for (let i = 0; i < columnWords.length - 1; i++) {
            result += capitalizeFirstLetter(columnWords[i]) + " ";
        }
        result += capitalizeFirstLetter(columnWords[columnWords.length - 1]);
        return result;
    }
}

const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
}