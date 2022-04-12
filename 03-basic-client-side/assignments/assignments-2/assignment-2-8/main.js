const boardEl = document.getElementById('board');

for (let row = 0; row < 8; row++) {
    for (let column = 0; column < 8; column++) {
        const square = document.createElement('div');
        square.classList.add('square');

        if (row % 2 === 0) {
            // if (column % 2 === 0) {
            //     square.classList.add('black');
            // } else {
            //     square.classList.add('gray');
            // }

            square.classList.add(column % 2 !== 0 ? 'black' : 'gray');
        } else {
            // if (column % 2 === 0) {
            //     square.classList.add('gray');
            // } else {
            //     square.classList.add('black');
            // }

            square.classList.add(column % 2 !== 0 ? 'gray' : 'black');
        }

        boardEl.appendChild(square);
    }
}
