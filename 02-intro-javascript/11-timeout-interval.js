// /* setTimeout */
// console.log(10);
const timeout = setTimeout(() => {
    console.log(false);
}, 100);

for (let i = 0; i < 20; i++) {
    console.log(true);
}

clearTimeout(timeout);

/* setInterval */
console.log(true);

const timer = setInterval(() => {
    console.log(false);
}, 100);

console.log(true);

clearInterval(timer);
