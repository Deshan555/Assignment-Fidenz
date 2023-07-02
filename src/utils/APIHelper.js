
const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;

export function getWeatherUrl(city) {
    return `https://api.openweathermap.org/data/2.5/weather?id=${city}&appid=${apiKey}`;
}
  

