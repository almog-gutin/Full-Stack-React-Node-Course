/* 

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

myCountry.population();

console.log(myCountry.isCountryGreaterThan10Million() ? 'The country is big!' : 'The country is small.');
