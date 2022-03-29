/* 
    צרו תוכנית שיכיל בתוכו מחלקה. 

    המחלקה תהיה הגרסה שלכם של המחלקה הקיימת בגווה סקריפט בשם Math
    תקראו למחלקה בשם MyMath.

    המחלקה תכלול שדה של PI.

    המחלקה תכלול שתי מתודות.
    מתודה בשם המקבל שתי פרמטרים היצצגים מספרים ומחזיר את המספר הכי קטןmin
    מתודה בשם מקבל שתי פרמפטרים המייצג מספרים ומחזיר את המספר הכי גדולmax

    המחלקה לא יהיה לה גישה ליצור אובייקטים.
*/

class MyMath {
    static PI = 3.1415;
    name = 'adfas';

    static min(num1, num2) {
        return num1 < num2 ? num1 : num2;
    }

    static max(num1, num2) {
        if (num1 > num2) {
            return num1;
        }

        return num2;
    }
}

console.log(MyMath.PI);
console.log(MyMath.min(5, 2));
console.log(MyMath.max(254, 132));
console.log(MyMath);
