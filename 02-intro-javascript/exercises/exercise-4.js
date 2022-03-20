/* 
    Create a program with 2 variables:
    1. team1Avg - represents the average of 90, 25, 100
    2. team2Avg - represents the average of 60, 20, 200

    Create a function named checkWinner. The function will compare both team averages.
    
    The function needs to check if the teams averages are equal to eachother. If 
    they are tied then return a message stating they are tied.

    If they are not equal to eachother then, you need to check which team has a higher
    average. After checking, return a message whuch team won the competition.

    The program needs to print out the answer that was returned from the function.
*/

const team1Avg = (100 + 25 + 90) / 3;
const team2Avg = (200 + 20 + 60) / 3;

const checkWinner = (team1, team2) => {
    if (team1 === team2) {
        return 'Team 1 and Team 2 are tied!';
    } else if (team1 > team2) {
        return 'Team 1 won the competition!';
    } else {
        return 'Team 2 won the competition!';
    }
};

// console.log(checkWinner(team1Avg, team2Avg));
const message = checkWinner(team1Avg, team2Avg);
console.log(`${message} It was a fair game.`);
