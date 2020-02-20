//code for responsive menu for small and medium views
function toggleMenu(){
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

//code for current date
const daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
const d = new Date();
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();
const fulldate = dayName + ", " + monthName + " " + d.getDate() +", " + year;
document.getElementById("currentdate").textContent = fulldate;

//code for banner ad
if (d.getDay() === 5) {
    document.getElementById("bannerad").hidden = false;
}