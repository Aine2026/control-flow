
const day = 4;

let dayName;
let plan;

// A switch is suitable because each number matches a specific day.
switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        console.log("Invalid day number");
}

if (day >= 1 && day <= 7) {
    if (day === 2 || day === 4 || day === 6) {
        plan = "CLASS";
    } else {
        plan = "FREE TIME";
    }

    console.log(`Day ${day}: ${dayName} — ${plan}`);
}
