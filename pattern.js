
const rows = 5;

// A. GROWING RIGHT TRIANGLE
console.log("A. Growing Right Triangle");

// The outer loop controls the number of rows.
// The inner loop adds one more star on every new row.
for (let i = 1; i <= rows; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += "*";
    }

    console.log(row);
}


// B. INVERTED RIGHT TRIANGLE
console.log("\nB. Inverted Right Triangle");

// The outer loop moves from 5 rows down to 1.
// The inner loop adds fewer stars on each new row.
for (let i = rows; i >= 1; i--) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += "*";
    }

    console.log(row);
}


// C. CENTERED PYRAMID
console.log("\nC. Centered Pyramid");

// The outer loop controls the rows.
// The first inner loop adds leading spaces.
// The second inner loop adds an increasing odd number of stars.
for (let i = 1; i <= rows; i++) {
    let row = "";

    for (let j = 1; j <= rows - i; j++) {
        row += " ";
    }

    for (let j = 1; j <= 2 * i - 1; j++) {
        row += "*";
    }

    console.log(row);
}


// D. INVERTED PYRAMID
console.log("\nD. Inverted Pyramid");

// The leading spaces increase as the pyramid narrows.
// The number of stars decreases by two on every row.
for (let i = rows; i >= 1; i--) {
    let row = "";

    for (let j = 1; j <= rows - i; j++) {
        row += " ";
    }

    for (let j = 1; j <= 2 * i - 1; j++) {
        row += "*";
    }

    console.log(row);
}


// E. NUMBER STAIRCASE
console.log("\nE. Number Staircase");

// The outer loop controls the row number.
// The inner loop adds numbers from 1 up to the current row.
for (let i = 1; i <= rows; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += j;
    }

    console.log(row);
}


// F. HOLLOW SQUARE
console.log("\nF. Hollow Square");

// The outer loop controls five rows.
// The inner loop controls five columns.
// Stars appear on the border; spaces fill the interior.
for (let i = 1; i <= rows; i++) {
    let row = "";

    for (let j = 1; j <= rows; j++) {
        if (i === 1 || i === rows ||
            j === 1 || j === rows) {
            row += "*";
        } else {
            row += " ";
        }
    }

    console.log(row);
}
