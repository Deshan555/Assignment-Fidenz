import { COLORS } from "../constants/constants";

// that function responsible for format time and date
export function timeFormat() {
  const currentDate = new Date();
  const monthNames = [
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
    "December",
  ];
  const monthName = monthNames[currentDate.getMonth()];
  const date = currentDate.getDate();
  const hours = currentDate.getHours().toString().padStart(2, "0");
  const minutes = currentDate.getMinutes().toString().padStart(2, "0");
  const currentTime = `${hours}:${minutes}`;
  const data = currentTime + ", " + monthName + " " + date;
  return data;
}

// That function responsible for change background color
export function RandomColor() {
  const randomIndex = Math.floor(Math.random() * COLORS.length);
  const randomColor = COLORS[randomIndex];
  return randomColor;
}

// that function convert unix time data into stranded time format and return data as string
export function Time_Formatter(weatherData) {
  let time_data = new Date(weatherData * 1000);
  const hours = time_data.getHours();
  const minutes = time_data.getMinutes();
  const amPm = hours >= 12 ? "PM" : "AM";
  time_data = (hours % 12) + ":" + minutes + " " + amPm;
  return time_data;
}
