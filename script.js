const date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

const nepaliMonths = [
  'बैशाख', 'जेठ', 'असार', 'श्रावण', 'भदौ', 'असोज', 'कार्तिक', 'मंसिर', 'पुष', 'माघ', 'फागुन', 'चैत्र'
];

if (day < 17) {
  day += 17;
} else {
  day -= 30;
  month += 1;
  day += 17;
}

if (month < 8) {
  month += 8;
} else {
  month -= 4;
  year += 1;
  month += 8;
}

year += 56;

date.setDate(day);
date.setMonth(month - 1);

const currentMonth = nepaliMonths[month];
const dayOfWeek = date.toLocaleString('ne-NP', {weekday: 'long'});

let formattedHours = hours;
let period = "AM";
if (hours >= 12) {
  formattedHours = hours % 12;
  if (formattedHours === 0) {
    formattedHours = 12;
  }
  period = "PM";
}

const currentMinutes = minutes.toString().padStart(2, '0');
const currentSeconds = seconds.toString().padStart(2, '0');

const currentTime = `${formattedHours}:${currentMinutes}:${currentSeconds} ${period}`;

const currentDate = `${dayOfWeek}, ${currentMonth} ${day.toString().padStart(2, '0')}, ${year} ${currentTime}`;

console.log(currentDate);
