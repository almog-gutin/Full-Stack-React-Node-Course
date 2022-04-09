const headerEl = document.getElementById('main-header');
const mainEl = document.getElementById('main-content');

const h1 = document.createElement('h1');
h1.innerText = 'Create Element Example';

const p = document.createElement('p');
p.innerText = 'I was able to add text with JavaScript to the HTML page.';

headerEl.appendChild(h1);
mainEl.appendChild(p);
