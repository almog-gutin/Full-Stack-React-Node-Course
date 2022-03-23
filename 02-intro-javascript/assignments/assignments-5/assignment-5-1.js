/* 
    Create a program that returns the area of a circle.
    
    The function will have a parameter that represents the radius of the circle.
    The function will return the calculation of PI times the radius in the power of 2.
    
    The program will call the function and print the answer to the console.
    
    Guess: PI, pow
*/

const calcCircleArea = (radius) => Math.PI * Math.pow(radius, 2);

console.log(calcCircleArea(2));
