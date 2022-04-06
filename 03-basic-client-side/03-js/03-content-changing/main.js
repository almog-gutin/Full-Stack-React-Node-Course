const paragraphEl = document.getElementById('paragraph');

/* How to change the text of an element */
paragraphEl.innerText = 'I think that HTML & CSS are BETTER!!!!!!!!';

const paragraph2El = document.getElementById('paragraph-2');

if (paragraph2El.innerText.length < 5) {
    paragraph2El.innerText = 'The original text was less than 5 charachters';
}

/* How to change the inner HTML of an element */
const squareEl = document.getElementById('square');

squareEl.innerHTML = '<h2 style="text-align: center">Inner HTML Example</h2>';

/* How to change the values of attributes */
const imgEl = document.getElementById('image');

imgEl.src = '';
imgEl.alt = 'NFT Monkey';

console.dir(document);
