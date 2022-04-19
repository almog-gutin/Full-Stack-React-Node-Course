/*
    Create a program the will print out todays date in the following formats:
    1. mm-dd-yy
    2. mm/dd/yy
    3. dd-mm-yy
    4. dd/mm/yy

    Guss: Date
*/

const formatNum = (num) => (num < 10 ? `0${num}` : `${num}`);

const formatDate = (date, format) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;

    const dd = formatNum(day);
    const mm = formatNum(month);
    const yyyy = date.getFullYear();

    let formattedDate;
    switch (format) {
        case 'mm-dd-yyyy':
            formattedDate = `${mm}-${dd}-${yyyy}`;
            break;
        case 'mm/dd/yyyy':
            formattedDate = `${mm}/${dd}/${yyyy}`;
            break;
        case 'dd-mm-yyyy':
            formattedDate = `${dd}-${mm}-${yyyy}`;
            break;
        default:
            formattedDate = `${dd}/${mm}/${yyyy}`;
    }

    return formattedDate;
};

const today = new Date(2022, 0, 2);

console.log(formatDate(today, 'mm-dd-yyyy'));
console.log(formatDate(today, 'mm/dd/yyyy'));
console.log(formatDate(today, 'dd-mm-yyyy'));
console.log(formatDate(today, 'dd/mm/yyyy'));
