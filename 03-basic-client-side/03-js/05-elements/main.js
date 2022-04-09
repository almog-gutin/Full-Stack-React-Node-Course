/* How To Create An Element */
const div = document.createElement('div');

console.dir(div);

div.innerText = 'New Div Was Created!';

/* How To Add Children Inside Of An Element */
const containerEl = document.getElementById('container');
containerEl.appendChild(div);

const img = document.createElement('img');
img.src = '../images/google logos.png';
img.alt = 'Google Logo';
containerEl.appendChild(img);

/* How To Remove Children Inside Of An Element */
const squareEl = document.getElementById('square');

containerEl.removeChild(squareEl);

/* How To Access The Children Of A Parent Element */
console.dir(containerEl.children);

const container2El = document.getElementById('container-2');
const container2ElChildren = container2El.children;

for (let i = 0; i < container2ElChildren.length; i++) {
    const child = container2ElChildren[i];

    child.src = '../images/google logos.png';
    child.alt = 'Google Logo';
}
