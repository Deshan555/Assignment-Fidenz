import {getWeatherDataByIds} from '../utils/APIHelper';

export const fetchWeatherData = async (ids) => {
    try {
        const response = await fetch(`${getWeatherDataByIds}&id=${ids.toString()}`);
        return await response.json();
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
};