export const setCachedData = (cityCode, cityData) => {
    const cachedDataToStore = {
        timestamp: new Date().getTime(),
        data: cityData,
    };
    localStorage.setItem(cityCode, JSON.stringify(cachedDataToStore));
};

export const getCachedData = (cityCode, updater) => {
    const cityData = localStorage.getItem(cityCode);
    if (cityData) {
        const parsedData = JSON.parse(cityData);
        const currentTime = new Date().getTime();
        const {timestamp, data} = parsedData;
        if (currentTime - timestamp < updater * 60 * 1000) {
            return data;
        }
    }
    return null;
};
