/* 
    Create a program that goes through the years 2014-2050.

    The program needs to check for every year if the 1st of January of that year was a Sunday.
    If the condition was met then print the year out to the console.
*/

const printYearsWhos1stOfJanuaryAreSunday = () => {
    for (let year = 2014; year <= 2050; year++) {
        const date = new Date(year, 0, 1);
        const day = date.getDay();

        if (day === 0) {
            console.log(year);
        }
    }
};

printYearsWhos1stOfJanuaryAreSunday();
