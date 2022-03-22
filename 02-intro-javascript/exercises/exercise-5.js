/* 
    כתבו תוכנית שיכיל בתוכו אובייקט
    לאובייקט יש מספר שדות: שם פרטי, שם משפחה, שנת לידה, שדה שמכיל בתוכו מערך של string שמייצג את השמות של האחים שלכם.

    לאובייקט יש מספר מטודות:
    מטודה של הדפסה - תדפיס את המידע של האובייקט בצורה של משפט

    מטודה שמחשבת מה הגיל שלכם ומחזירה את התוצאה

    מטודה שמחזירה כמה אחים יש לכם.

    התוכנית צריכה להדפיס את המידע של האובייקט בעזרת המטודה של ההדפסה.

    התוכנית צריכה לקרוא למטודה שמחזירה כמה אחים יש לכם. ועם המידע שחזר מהמטודה להוסיף שדה נוסף לאובייקט שמתאר כמה אחים יש לכם.

    התוכנית צריכה לקרוא למטודה שמחזירה את הגיל שלכם. וצריכה לבדוק תנאי האם אתם בגיל 30 ומעלה. אם כן להדפיס הודעה שאתם מבוגרים. אם התנאי לא מתקיים להדפיס שאתם צעירים.
*/

const me = {
    firstName: 'Almog',
    lastName: 'Gutin',
    birthYear: 1999,
    brothers: ['Ido', 'Amit'],

    print() {
        console.log(
            `My name is ${this.firstName} ${this.lastName}. I was born in the year ${this.birthYear}, and my brothers names are ${this.brothers}.`
        );
    },

    calcAge() {
        return 2022 - this.birthYear;
    },

    getNumberOfBrothers() {
        return this.brothers.length;
    },
};

me.print();

// me.numOfBrothers = me.getNumberOfBrothers();
me['numOfBrothers'] = me.getNumberOfBrothers();
console.log(me);

// Option 1:
if (me.calcAge() > 30) {
    console.log('I am an old person!');
} else {
    console.log('I am very young!');
}

// Option 2:
console.log(me.calcAge() > 30 ? 'I am an old person!' : 'I am very young!');
