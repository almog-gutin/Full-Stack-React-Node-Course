/* 

*/

const arr = [10, 20, 50, -10, 30, -5, -1, 0];

let count = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i < 0]) {
        count++;
    }
}

console.log(count);
