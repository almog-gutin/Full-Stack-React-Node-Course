/* 
    Create a program which will contain a function.
    
    The function will get a parameter which will represent an array of strings, where each string will be written in kebab case.
    The function needs to transform the elements in the array from kebab case to camel case. 
    At the end, the function needs to return a new array with the changes.
    
    Write the function once with the for loop and once with the map method.
    
    The program will call the function and print the returned array to the console.
    
    Guess: slice, concat
    
    Example - 
    Input: [first_name, last_name, underscore_case]
    Output: [firstName, lastName, underscoreCase]
*/

const transformToCamelCaseV1 = (arr) => {
    const camelCaseArr = [];

    for (let i = 0; i < arr.length; i++) {
        const str = arr[i];
        let underscoreIndex = 0;

        for (let j = 0; j < str.length; j++) {
            const char = str[j];

            if (char === '_') {
                underscoreIndex = j;
                break;
            }
        }

        const camelCaseStr = str
            .slice(0, underscoreIndex)
            .concat(str.slice(underscoreIndex + 1, underscoreIndex + 2).toUpperCase(), str.slice(underscoreIndex + 2));

        camelCaseArr.push(camelCaseStr);
    }

    return camelCaseArr;
};

// const transformToCamelCaseV2 = (arr) =>
//     arr.map((str) => {
//         let underscoreIndex = 0;

//         for (let j = 0; j < str.length; j++) {
//             const char = str[j];

//             if (char === '_') {
//                 underscoreIndex = j;
//                 break;
//             }
//         }

//         camelCaseStr = str
//             .slice(0, underscoreIndex)
//             .concat(str.slice(underscoreIndex + 1, underscoreIndex + 2).toUpperCase(), str.slice(underscoreIndex + 2));

//         return camelCaseStr;
//     });
// console.log(transformToCamelCaseV2(kebabArr));
