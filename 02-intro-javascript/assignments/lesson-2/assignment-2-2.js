/* 
    Create a program that has 2 variables:
    1. team1Avg - represents the average of 3 scores (100, 20, 70)
    2. team2Avg - represents the average of 3 scores (200, 20, 50)

    The program needs to check if team1Avg is greater than team2Avg 
    and if the average is greater than or equals to 100. If the statment
    is true then the program will print to the console that team1 has 
    a higher score then team2.

    Else the program needs to check if team2Avg is greater than team1Avg 
    and if the average is greater than or equals to 100. If the statment
    is true then the program will print to the console that team2 has 
    a higher score then team1.

    Else the program needs to check if both team averages are equal to eachother.
    If the statment is true, then the program will print out to the console 
    that both team scores are equal.

    else the program will print out to the console that none of the statments
    are true.
*/

const team1Avg = (100 + 20 + 70) / 3;
const team2Avg = (200 + 20 + 50) / 3;

// Option 1
if (team1Avg > team2Avg && team1Avg >= 100) {
    console.log('Team 1 has a higher score then team 2!');
} else if (team1Avg < team2Avg && team2Avg >= 100) {
    console.log('Team 2 has a higher score then team 1!');
} else if (team1Avg === team2Avg) {
    console.log('Both teams are equal to eachother!');
} else {
    console.log('None of the statements are true!');
}

// Option 2
let message1; // undefiend
if (team1Avg > team2Avg && team1Avg >= 100) {
    message1 = 'Team 1 has a higher score then team 2!';
} else if (team1Avg < team2Avg && team2Avg >= 100) {
    message1 = 'Team 2 has a higher score then team 1!';
} else if (team1Avg === team2Avg) {
    message1 = 'Both teams are equal to eachother!';
} else {
    message1 = 'None of the statements are true!';
}

console.log(message1);

// Option 3
let message2 = 'None of the statements are true!';
if (team1Avg > team2Avg && team1Avg >= 100) {
    message2 = 'Team 1 has a higher score then team 2!';
} else if (team1Avg < team2Avg && team2Avg >= 100) {
    message2 = 'Team 2 has a higher score then team 1!';
} else if (team1Avg === team2Avg) {
    message2 = 'Both teams are equal to eachother!';
}

console.log(message2);
