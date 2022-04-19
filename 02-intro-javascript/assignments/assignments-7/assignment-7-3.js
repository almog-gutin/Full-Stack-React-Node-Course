/* 
    Create a function that gets a parameter that represents degrees of the weather.

    The function will convert from Fahrenheit to Celsius.
    The function will return the conversion.

    C = (5(F - 32)) / 9
*/

const convertFToC = (degrees) => (5 * (degrees - 32)) / 9;

console.log(convertFToC(100));
