/* 
    Create a function which consists of a function.

    The function gets an array of numbers that represent the ages of dogs.
    The function needs to convert the ages of the dogs to human years (age of dog * 7). In addition, the function needs to filter out all the dogs who are over the age of 40.
    At the end, the function needs to return an array that represents the ages of dogs in human years who are less than or equal to 40.

    Guess: map, filter

    Example -
    Input: [2, 5, 4 ,7 , 6, 3, 4, 9]
    Output: [14, 35, 28, 21, 28]
*/

const dogYearsToHumanYears = (dogAges) => {
    return dogAges.map((dogAge) => dogAge * 7).filter((dogAge) => dogAge <= 40);
};

const dogAges = [2, 5, 4, 7, 6, 3, 4, 9];

console.log(dogYearsToHumanYears(dogAges));
