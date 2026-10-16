
let fizzBuzzCount = 0;
let output = "";

for (let number = 1; number <= 100; number++) {
    // A for loop is appropriate because the range is known.
    if (number % 3 === 0 && number % 5 === 0) {
        output += "FizzBuzz";
        fizzBuzzCount++;
    } else if (number % 3 === 0) {
        output += "Fizz";
    } else if (number % 5 === 0) {
        output += "Buzz";
    } else {
        output += number;
    }

    if (number < 100) {
        output += ", ";
    }
}

console.log(output);
console.log("FizzBuzz count:", fizzBuzzCount);
