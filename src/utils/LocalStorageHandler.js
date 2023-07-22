export const setCachedData = (cityData) => {
    localStorage.setItem("weatherData", JSON.stringify(cityData));
};

export const getCachedData = () => {
    const weatherData = localStorage.getItem("weatherData");
    if (weatherData) {
        return JSON.parse(weatherData);
    }
    return null;
};

export const isExpired = (data, key1, key2) => {
    if (!data[key1] || !data[key2]) return true;
    const currentTime = new Date().getTime();
    return !(currentTime - data[key1] < data[key2] * 60 * 1000);
};

export const setRequiredData = (elements, initialCitiesData) => {
    return elements.map((el) => ({
        ...el,
        CityCode: el?.id,
        expirationTime: initialCitiesData.find(
            (city) => parseInt(city.CityCode, 10) === el.id
        )?.expirationTime,
        timestamp: new Date().getTime()
    }));
};
