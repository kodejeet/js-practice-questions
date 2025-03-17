var today = new Date();
// console.log(today.toLocaleString());   ----->>> shortcut method

const day = today.getDay();
const daylist = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log("Today's day is : " + daylist[day] + ".")

const hour = today.getHours();
const minutes = today.getMinutes();
const milliseconds = today.getMilliseconds();
let prepand;

if(hour > 0 && hour <= 12){
    if (minutes >= 0 && minutes < 59) {
        prepand = "A.M";
    }
    else{
        prepand = "P.M.";
    }
}
console.log("Time right now is : " + hour + " "+prepand+ " : " + minutes+" : "+milliseconds);