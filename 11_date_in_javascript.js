// Dates in javascript

// Creating a date object
let currentDate = new Date();
console.log("Current Date and Time:", currentDate);


// Getting the current year
let currentYear = currentDate.getFullYear();
console.log("Current Year:", currentYear);

// Getting the current month (0-11)
let currentMonth = currentDate.getMonth() + 1; // Adding 1 to make it 1-12
console.log("Current Month:", currentMonth);

// Getting the current day of the month
let currentDay = currentDate.getDate();
console.log("Current Day of the Month:", currentDay);


// Getting the current day of the week (0-6)
let currentDayOfWeek = currentDate.getDay();
console.log("Current Day of the Week (0=Sunday):", currentDayOfWeek);


// Getting the current hours
let currentHours = currentDate.getHours();
console.log("Current Hours:", currentHours);

// Getting the current minutes
let currentMinutes = currentDate.getMinutes();
console.log("Current Minutes:", currentMinutes);

// Getting the current seconds
let currentSeconds = currentDate.getSeconds();
console.log("Current Seconds:", currentSeconds);


// Formatting date to a readable string
let formattedDate = currentDate.toDateString();
console.log("Formatted Date:", formattedDate);   


// Formatting time to a readable string
let formattedTime = currentDate.toTimeString();
console.log("Formatted Time:", formattedTime);

// Getting the timestamp (milliseconds since January 1, 1970)
let timestamp = currentDate.getTime();
console.log("Timestamp (ms since Jan 1, 1970):", timestamp);


// Creating a specific date (e.g., December 25, 2023)
let specificDate = new Date(2023, 11, 25); // Month is 0-indexed (11 = December)
console.log("Specific Date (Dec 25, 2023):", specificDate);     


// Calculating the difference between two dates
let pastDate = new Date(2020, 0, 1); // January 1, 2020
let dateDifference = currentDate - pastDate;    

let daysDifference = Math.floor(dateDifference / (1000 * 60 * 60 * 24));
console.log("Days since January 1, 2020:", daysDifference);


// Adding days to the current date
let daysToAdd = 10;
let futureDate = new Date(currentDate);
futureDate.setDate(futureDate.getDate() + daysToAdd);
console.log(`Date after adding ${daysToAdd} days:`, futureDate);


// Subtracting days from the current date
let daysToSubtract = 5;
let pastDateCalculated = new Date(currentDate);
pastDateCalculated.setDate(pastDateCalculated.getDate() - daysToSubtract);
console.log(`Date after subtracting ${daysToSubtract} days:`, pastDateCalculated);


// Getting the ISO string representation of the date
let isoString = currentDate.toISOString();
console.log("ISO String Representation:", isoString);

// Getting the UTC date and time
let utcDate = currentDate.toUTCString();
console.log("UTC Date and Time:", utcDate);


// Setting a specific time (e.g., 15:30:00)
let specificTimeDate = new Date(currentDate);
specificTimeDate.setHours(15, 30, 0);
console.log("Date with Specific Time (15:30:00):", specificTimeDate);


// Getting the week number of the year
function getWeekNumber(date) {
    let firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    let pastDaysOfYear = (date - firstDayOfYear) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}


let weekNumber = getWeekNumber(currentDate);
console.log("Current Week Number of the Year:", weekNumber);        

// Getting the number of days in the current month
function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}


let daysInCurrentMonth = getDaysInMonth(currentYear, currentMonth - 1);
console.log("Days in Current Month:", daysInCurrentMonth);

// Comparing two dates
let anotherDate = new Date(2022, 5, 15);
if (currentDate > anotherDate) {
    console.log("Current date is after June 15, 2022");
} else if (currentDate < anotherDate) {
    console.log("Current date is before June 15, 2022");
} else {
    console.log("Current date is the same as June 15, 2022");
}

