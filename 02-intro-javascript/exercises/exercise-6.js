/* 
    Create a program that contains a function. The function validates an email address.
    1. The function has a parameter which represent a string. 
    2. The function needs to check if the parameter has '@' and ends with '.com' or '.co.il'
    3. The function needs to return true or false if the parameter is a valid email.
    4. The function also needs to return a proper result even if the parameters have
    spaces in the beginning and the end.

    Run the function twice:
    1. Once call the function with 'almog@hyperactive.co.il'
    2. Once call the function with 'almog@hyperactive.org'
*/

/* 
    צרו תוכנית שבתוכו יש פונקצייה

    הפונקצייה יש פרמטר מסוג סטרינג
    הפונקציה צריכה לבדוק האם הפרמטר מכיל בתוכה את הסימן ״@״ וגם אם הפרמטר מסתיים עם הסיומת
    ".com"
    או 
    ״.co.il״

    הפונקציה צריכה להחזיר אמת או שקר אם התנאי למאלה מתקיים או לא
    כמו כן, הפונקציה עדיין צריכה להחזיר אמת או שקר גם אם הפרמטר מתחיל עם רווחים ומסתיים עם רווחים.
*/

const isEmailValid = (email) => {
    const trimedEmail = email.trim();

    return trimedEmail.includes('@') && (trimedEmail.endsWith('.com') || trimedEmail.endsWith('.co.il'));

    // if (trimedEmail.includes('@') && (trimedEmail.endsWith('.com') || trimedEmail.endsWith('.co.il')) {
    //     return true;
    // }

    // return false;
};

console.log(isEmailValid('almog@hyperactive.co.il')); // true
console.log(isEmailValid('almog@hyperactive.org')); // false
