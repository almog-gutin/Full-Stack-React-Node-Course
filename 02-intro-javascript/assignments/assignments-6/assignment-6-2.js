/* 
    Create a program which will contain a function.

    The function will receive a parameter which represents an array of numbers. 
    The function will print out to the console the lowest number, the highest number, and the average of the numbers.

    The program will call the function and send as an argument an array of numbers.

    Example - 
    Input: [10, 7, 2, 1]
    
    Output: 
    1. The lowest number - 1
    2. The highest number - 10
    3. The average - 5
*/

const printAvgHighLow = (numbers) => {
    if (numbers.length === 0) {
        return;
    }

    let highest = numbers[0];
    let lowest = numbers[0];
    let sum = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        const number = numbers[i];

        if (number > highest) {
            highest = number;
        }

        if (number < lowest) {
            lowest = number;
        }

        sum += number;
    }

    console.log('Highest Number:', highest);
    console.log('Lowest Number:', lowest);
    console.log('Average:', sum / numbers.length);
};

const numbers = [10, 7, 2, 1];
printAvgHighLow(numbers);
