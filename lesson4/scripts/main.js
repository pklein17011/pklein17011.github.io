var currentDate = new Date();
var currentDateString;

// get day of week
var weekDayNumber = currentDate.getDay();

var daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

var weekDay = daysOfWeek[weekDayNumber];

// get month
var months = [
    'January',
    'February',
    'March',
    'Arpil',
    'May',
    'June',
    'July',
    'August',
    'Spetember',
    'October',
    'Novemeber',
    'December'
];

var monthNumber = currentDate.getMonth();

var month = months[monthNumber];


// outoput
currentDateString = weekDay + ', ' + currentDate.getDate() + ' ' + month + ' ' + currentDate.getFullYear();

document.getElementById('currentDate').innerHTML = currentDateString;

// DEBUG;
console.log(currentDateString);

function toggleMenu() {
	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}