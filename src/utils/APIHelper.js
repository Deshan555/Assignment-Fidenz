
const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
const baseURL = process.env.REACT_APP_BASE_URL;

export const getWeatherDataByIds = `${baseURL}/group?appid=${apiKey}&units=metric`;