import {getWeatherDataByIds} from '../utils/APIHelper';

/*export function fetchWeatherData(city) {

    const weatherUrl = getWeatherUrl(city);

    return fetch(weatherUrl)
        .then(response => response.json())
        .catch(error => {
            console.error("Error fetching weather data:", error);
        });
}



export function fetchWeatherData(ids) {
    try {
        const response = await fetch(`${getWeatherDataByIds}&id=${ids.toString()}`);
        return await response.json();
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}*/

export const fetchWeatherData = async (ids) => {
    try {
        const response = await fetch(`${getWeatherDataByIds}&id=${ids.toString()}`);
        return await response.json();
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
};