/* 
    Create a program that contains an object which represents your country. 
    
    The object's properties:
    1. name
    2. capital
    3. language
    4. population

    The object's methods:
    1. method that prints to the console that country's data in a full sentence
    2. method that returns true of false if the country has more then 10 million people

    The program needs to run the method that prints the country's data to the console.

    The program needs to check if the population of the country is more then 10 million. 
    If the country has more then 10 miillion people then print out to the console that the
    country is huge. If this statement is false then print out to the console that 
    the country is small.
*/

const myCountry = {
    name: 'Israel',
    capital: 'Jerusalem',
    language: 'Hebrew',
    population: 9.124,

    print() {
        console.log(
            `My country is ${this.name} and it's capital is the city ${this.capital}. The language that is spoken in the country is ${this.language}. In addition, there are ${population} million people.`
        );
    },

    isCountryGreaterThan10Million() {
        return this.population > 10;
    },
};

myCountry.print();

console.log(myCountry.isCountryGreaterThan10Million() ? 'The country is big!' : 'The country is small.');
