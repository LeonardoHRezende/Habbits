import dayjs from 'dayjs';

export function generateDaysFromYearBegginer() {
    const firstDayOfYear = dayjs().startOf('year');
    const today = new Date();

    const dates = [];
    var compareDate = firstDayOfYear;

    while (compareDate.isBefore(today)) {
        dates.push(compareDate.toDate());
        compareDate = compareDate.add(1, 'day');
    }

    return dates
}

