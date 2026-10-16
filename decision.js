
const mark = 84;

if (!Number.isFinite(mark) || mark < 0 || mark > 100) {
    console.log("Invalid mark");
} else {
    let grade;
    let feedback;

    if (mark >= 80) {
        grade = "A";
        feedback = "Excellent";
    } else if (mark >= 70) {
        grade = "B";
        feedback = "Very good";
    } else if (mark >= 60) {
        grade = "C";
        feedback = "Good";
    } else if (mark >= 50) {
        grade = "D";
        feedback = "Pass";
    } else {
        grade = "F";
        feedback = "Fail";
    }

    const result = mark >= 50 ? "PASS" : "FAIL";
    console.log(`Mark: ${mark} | Grade: ${grade} | ${feedback} | ${result}`);
}
