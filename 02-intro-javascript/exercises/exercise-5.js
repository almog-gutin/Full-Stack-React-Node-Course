/* 
    צרו תוכנית שבו יתקיים שני משתנים:
    team1Avg - מייצג ממוצע של שלוש ערכים 100, 25, 90
    team2Avg - מייצג ממוצע של שלוש ערכים 200, 20, 60

    צרו פונקציה בשם checkWinner. 
    הפונקצייה תשווה בין הממוצעים של שני הקבוצות

    הפקונצייה צריכה לבדוק האם הממוצעים של שני הקבוצות שווים אחת לשניה. אם כן הפונקיצה תחזיר הודעה שהקבוצות בתיקו.

    אם התנאי לא מתקיים, הפונקציה צריכה לבדוק האם הממוצע של קבוצה 1 יותר גדולה מהקבוצה השנייה. אם כן הפונקציה תחזיר הודעה שהקבוצה הראשונה ניצחה בתחרות. 

    אם התנאי לא מתקיים צריכה לבדוק האם הממוצע של קבוצה 2 יותר גדולה מהממוצע של קבוצה 1. אם כן הפונקציה תחזיר הודעה שהקבוצה השנייה ניצחה בתחרות.

    התוכנית צריכה להדפיס לי את התשובה שחזרה מהפונקציה.    
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
