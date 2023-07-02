import { COLORS } from '../constants/constants';

// Helper function to convert temperature from Kelvin to Celsius

export function convertKelvinToCelsius(kelvin) 
{
    return Math.round(kelvin - 273.15);
}
  
// Helper function to convert UNIX timestamp to time string

export function getTimeString(timestamp) {
    const date = new Date(timestamp * 1000);

    const hours = date.getHours().toString().padStart(2, "0");

    const minutes = date.getMinutes().toString().padStart(2, "0");

    return `${hours}:${minutes}`;
}


// that function responsible for format time and date
export function timeFormate() {

    // Get the current date and time
    const currentDate = new Date();

    // Get the month name
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const monthName = monthNames[currentDate.getMonth()];

    // Get the date
    const date = currentDate.getDate();

    // Get the current time
    const hours = currentDate.getHours().toString().padStart(2, '0');

    const minutes = currentDate.getMinutes().toString().padStart(2, '0');

    // Format the current time as a string
    const currentTime = `${hours}:${minutes}`;

    const data = currentTime + ", " + monthName + " " + date;

    return data;
}

// That function responsible for change background color
export function RandomColor(){

  const randomIndex = Math.floor(Math.random() * COLORS.length);

  const randomColor = COLORS[randomIndex];

  return randomColor;
}


// that function convert unix time data into stranderd time formate and return data as string 
export function Time_Formatter(weatherData){
    
    var time_data = new Date(weatherData * 1000);

    const hours = time_data.getHours();

    const minutes = time_data.getMinutes();

    const amPm = hours >= 12 ? 'PM' : 'AM';
    
    time_data = hours % 12 + ':' + minutes + ' ' + amPm;

    return time_data;

}