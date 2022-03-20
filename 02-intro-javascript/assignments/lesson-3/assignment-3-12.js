/* 
    Create a function the recieves an array and checks if the length of the array
    is greater than 5. 

    If the array is greater than 5 the function will take out the last element of 
    the array and return it. If statement is false then the function will return 0.
*/

const isArrGreaterThan5 = (arr) => {
    if (arr.length <= 5) {
        return 0;
    }

    const poppedElement = arr.pop();

    return poppedElement;
};

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 3, 4, 5, 6];

console.log(isArrGreaterThan5(arr1));
console.log(isArrGreaterThan5(arr2));
