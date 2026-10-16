
console.log("Ascending:");

// A for loop is suitable because we know the starting
// number, ending number, and step size.
for (let number = 2; number <= 50; number += 2) {
    console.log(number);
}

console.log("Descending:");

// A while loop repeats while its condition remains true.
let number = 50;

while (number >= 2) {
    console.log(number);
    number -= 2;
}

console.log("Numbers from 1 to 30, skipping multiples of 6:");

// Continue skips the current iteration and moves to the next.
for (let i = 1; i <= 30; i++) {
    if (i % 6 === 0) {
        continue;
    }

    console.log(i);
}

// Extra challenge: calculate the sum of odd numbers from 1 to 99.
let sum = 0;

for (let odd = 1; odd <= 99; odd += 2) {
    sum += odd;
}

console.log("Sum of odd numbers:", sum);
