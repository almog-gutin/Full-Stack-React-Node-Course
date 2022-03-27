/* 
    Create a program which will contain an object representing yourself.
    
    The object will contain the following properties: first name, last name and your birth date.
    Add to the object a method which calculates your age and returns the calculation.
    
    Guess: Date
*/

const me = {
    firstName: 'Almog',
    lastName: 'Gutin',
    birthDate: new Date(1999, 8, 19),

    calcAge() {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();

        return currentYear - this.birthDate.getFullYear();
    },
};

console.log(me.calcAge());
