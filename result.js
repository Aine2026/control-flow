
const marks = [78, 45, 92, 60, 33, 87, 50, 69];

let passCount = 0;
let failCount = 0;
let total = 0;

// Initialize highest and lowest with the first mark.
let highest = marks[0];
let lowest = marks[0];

// A for...of loop is suitable because we need to visit
// every mark in the array without needing its index.
for (const mark of marks) {
    const result = mark >= 50 ? "PASS" : "FAIL";

    console.log(`Mark: ${mark} | ${result}`);

    if (mark >= 50) {
        passCount++;
    } else {
        failCount++;
    }

    total += mark;

    if (mark > highest) {
        highest = mark;
    }

    if (mark < lowest) {
        lowest = mark;
    }
}

const average = total / marks.length;

console.log("----- SUMMARY -----");
console.log(`Passed: ${passCount} | Failed: ${failCount}`);
console.log(`Highest: ${highest} | Lowest: ${lowest} | Average: ${average.toFixed(2)}`);
console.log(`Total: ${total}`);
