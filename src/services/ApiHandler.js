import {getWeatherUrl} from '../utils/APIHelper';

export function fetchWeatherData(city) {
    
    const weatherUrl = getWeatherUrl(city);

    return fetch(weatherUrl)
        .then(response => response.json())
        .catch(error => {
            console.error("Error fetching weather data:", error);
        });
}