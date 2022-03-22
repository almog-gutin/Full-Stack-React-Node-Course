/* 

*/

for (let i = 1; i <= 10; i++) {
    let row = '';

    for (let j = 1; j <= 10; j++) {
        row = row + ` ${i * j}`;
    }

    console.log(row);
}
