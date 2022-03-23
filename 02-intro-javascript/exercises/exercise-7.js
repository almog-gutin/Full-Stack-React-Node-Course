/* 
    Create a program the contains a function that generates a random number from 0 to 
    the maximun number you send to the function
    1. The function has a parameter that represents a number which is the maximum number
    that the function can generate.
    2. The function will return a random generated number from 0 to the maximum number

    Call the function with an argument of 3 and print it out to the console.
*/

/* 
    צרו תוכנית שיכליל בתוכה פונקציה שממחזירה לי מספר רנדומלי בים 0 למספר המקסימלי שאני שולח לפונקציה

    הפונקציה מקבלת פרמטר מסוג מספר המייצג את המספר המקסימלי
    הפונקציה תחזיר מספר רנדומלי בין 0 למספר המקסימלי

    תקראו לפוקצייה ותעבירו בתור ארגומנט את הספרה 3 ולהדפיס את התוצאה שחוזרת מהפונקציה.
*/

const generateRandomNumber = (max) => {
    const randomDoubleNum = Math.random() * max;

    return Math.round(randomDoubleNum);
};

console.log(generateRandomNumber(3));
