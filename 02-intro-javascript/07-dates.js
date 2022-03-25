// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

/* Date Class */

// How To Create A Current Date Object
const date = new Date(); // Current Date
console.log(date);

// How To Create A Date Object of any day
const myDate = new Date('September 19, 1999');
console.log(myDate);

const myDate2 = new Date('September 19, 1996 03:24:00');
console.log(myDate2);

const myDate3 = new Date(1999, 9);
console.log(myDate3);

// How To Create Dates with Parameters
// new Date(year, monthAsNumber);
// new Date (year, monthAsNumber, day);
// new Date (year, monthAsNumber, day , hours);
// new Date (year, monthAsNumber, day , hours, minutes);
// new Date (year, monthAsNumber, day , hours, minutes, seconds);
// new Date (year, monthAsNumber, day , hours, minutes, seconds, milliseconds);

const longDate = new Date(2022, 03, 24, 16, 05, 43, 56);
console.log(longDate);

/* Date Object Methods */
// getDate - Returns the day of the month
const date2 = new Date();
console.log(date2.getDate());

// getDay - Return the day of the week as a number, Sunday - Saturday = 0 - 6
const date3 = new Date();
console.log(date3.getDay());

// getFullYear - Returns the year
const date4 = new Date();
console.log(date4.getFullYear());

// getMonth - Returns the month as a number, January - 0
const date5 = new Date();
console.log(date5.getMonth());

// getHours - Returns the hours
const date6 = new Date();
console.log(date6.getHours());

// getMinutes - Returns the minutes
const date7 = new Date();
console.log(date7.getMinutes());

// getSeconds - Returns the seconds
const date8 = new Date();
console.log(date8.getSeconds());

// getMiliiSeconds - Returns the milliseconds
const date9 = new Date();
console.log(date9.getMilliseconds());

// toDateString - Returns the date as a string
const date10 = new Date();
console.log(date10.toDateString());

// toTimeString - Returns the full time as a string
const date11 = new Date();
console.log(date11.toTimeString());

/* Date Class Methods */
// How To Get The Date In Milliseonds From January 1, 1970
console.log(Date.now());
