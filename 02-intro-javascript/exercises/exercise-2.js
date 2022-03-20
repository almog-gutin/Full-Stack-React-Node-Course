/*
    There are two teams, Dolphins and Nicks. They compete against each other 3 times. The winner with the highest average score wins!

    Your tasks:
    1. Calculate the average score for each team, using the test data below
    2. Compare the team's average scores to determine the winner of the competition,
    and print it to the console. 

    Test data:
    Dolphins - 200, 20, 10
    Nicks - 100, 50, 70
*/

const dolphinsSum = 200 + 20 + 10;
const nicksSum = 100 + 50 + 20;

const dolphinsAvg = dolphinsSum / 3;
const nicksAvg = nicksSum / 3;

if (dolphinsAvg > nicksAvg) {
    console.log('Dolphins have a greater average score than the Nicks.');
} else {
    console.log('Nicks have a greater average score than the Dolphins.');
}
