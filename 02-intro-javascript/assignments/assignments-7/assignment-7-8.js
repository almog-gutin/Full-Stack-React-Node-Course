/* 

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
