const me = {
    firstName: 'Almog',
    lastName: 'Gutin',
    age: 22,
    isTheOldestBrother: false,
};
console.log(me);

/* How To Convert An Object To String/JSON Format */
const jsonMe = JSON.stringify(me);
console.log(jsonMe);
console.log(typeof jsonMe);

/* How To Convert JSON Format/String To An Object */
const paresedMe = JSON.parse(jsonMe);
console.log(paresedMe);
console.log(typeof paresedMe);

const jsonExample = '{"firstName":"Yarden","lastName":"Sapir"}';
const parsedJsonExample = JSON.parse(jsonExample);
console.log('Parsed JSON Example: ', parsedJsonExample);
console.log(typeof parsedJsonExample);
console.log(parsedJsonExample.firstName);
