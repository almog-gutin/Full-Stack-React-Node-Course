/* 
    Create a function that has 1 parameter which represents an array of strings.

    The function will go over the entire array and return the longest string.

    Input: ['Almog', 'Tal', 'Ariye']
    Output: 'Almog'
*/

const getLongestString = (stringArr) => {
    let longestStr = stringArr[0];

    for (let i = 0; i < stringArr.length; i++) {
        const str = stringArr[i];

        if (longestStr.length < str.length) {
            longestStr = str;
        }
    }

    return longestStr;
};

const stringArr = ['Almog', 'Tal', 'Ariye'];
console.log(getLongestString(stringArr));
