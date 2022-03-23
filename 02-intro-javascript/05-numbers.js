/* How To Create A Number */
const num1 = 10;
const num2 = -230.4564;
const num3 = NaN;

/* Number Conversions/Casting */
console.log(Number('10')); // 10
console.log(Number('hfdjkfjkhdfkjh')); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(parseInt('20')); // 20
console.log(parseInt('fgdfdf')); // NaN
console.log(parseInt(true)); // NaN
console.log(+'30'); // 30

/* Number Methods */
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

// parseInt
console.log(parseInt('20')); // 20
console.log(parseInt('20 30 50')); // 20
console.log(parseInt('10.8765')); // 10
// console.log(parseInt('fgdfdf')); // NaN

// parseFloat
console.log(parseFloat('10')); // 10
console.log(parseFloat('10.33')); // 10.33
console.log(parseFloat('30 34 43 12')); // 30

/* Math Object */
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// PI
console.log(Math.PI); // 3.141592653589793

// min
console.log(Math.min(7, 2)); // 2
console.log(Math.min(9, 20, 4, 13, 2345678, 9876543)); // 4

// max
console.log(Math.max(7, 2)); // 7
console.log(Math.max(9, 20, 4, 13, 2345678, 9876543)); // 9876543

// abs
console.log(Math.abs(-5)); // 5
console.log(Math.abs(2 - 10)); // 8

// round
console.log(Math.round(0.8)); // 1
console.log(Math.round(4.2)); // 4
console.log(Math.round(1.5)); // 2

// pow
console.log(Math.pow(7, 2)); // 49
console.log(Math.pow(2, 3)); // 8

// sqrt
console.log(Math.sqrt(25)); // 5
console.log(Math.sqrt(8 + 8 - 7)); // 3
console.log(Math.sqrt(-1)); // NaN

//  floor
console.log(Math.floor(45.8)); // 45
console.log(Math.floor(25.4)); // 25
console.log(Math.floor(null)); // 0
console.log(Math.floor(-2.434534)); // -3

// random
console.log(Math.random());
