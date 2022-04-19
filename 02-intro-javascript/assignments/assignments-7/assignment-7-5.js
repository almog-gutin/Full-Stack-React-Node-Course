/* 

*/

const moveEndCharToFront = (str) => str.slice(-1).concat(str.slice(0, -1));

const str = 'almog';
console.log(moveEndCharToFront(str));
