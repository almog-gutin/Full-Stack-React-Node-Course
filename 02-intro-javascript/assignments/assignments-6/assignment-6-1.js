/* 
    Create a program which will contain a function.
    
    The function will receive a parameter the represents a Date object.
    The function will return a string that will represent the upcoming format - 
    “DD/MM/YYYY HH:MM:SS”

    The program will call the function and send a Date object as an argument. In addition, it will print out to the console the returned value.

    Example - 
    Input: new Date()
    Output: 25/03/2022 10:36:02
*/

const formatNumber = (number) => {
    return number < 10 ? `0${number}` : `${number}`;
};

const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const formattedDate = `${formatNumber(day)}/${formatNumber(month + 1)}/${year} ${formatNumber(
        hours
    )}:${formatNumber(minutes)}:${formatNumber(seconds)}`;

    return formattedDate;
};

const date = new Date();

const formattedDate = formatDate(date);
console.log(formattedDate);
