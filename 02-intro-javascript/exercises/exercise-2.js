// dolphins - 200, 20, 10
// nicks - 100, 50, 70

// dolphinsAvg
// nicksAvg

const dolphinsSum = 200 + 20 + 10;
const nicksSum = 100 + 50 + 20;

const dolphinsAvg = dolphinsSum / 3;
const nicksAvg = nicksSum / 3;

if (dolphinsAvg > nicksAvg) {
    console.log('Dolphins have a greater average score than the Nicks.');
} else {
    console.log('Nicks have a greater average score than the Dolphins.');
}
