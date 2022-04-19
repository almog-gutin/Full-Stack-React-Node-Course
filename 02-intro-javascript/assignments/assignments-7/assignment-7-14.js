/* 
    Create a function which recives 1 parameter, an array.

    The function needs to return a filtered array without the following elements:
    1. null
    2. ""
    3. 0
    4. false
*/

const filter = (arr) => {
    return arr.filter((element) => element);
};

const arr = [null, 15, '', 0, true, ''];
console.log(filter(arr));
