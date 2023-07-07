export const getLocalStorageData = () => {
    const cachedData = localStorage.getItem("weatherData");
    if (cachedData) {
        const parsedData = JSON.parse(cachedData);
        const currentTime = new Date().getTime();
        const {timestamp, data} = parsedData;
        if (currentTime - timestamp < 5 * 60 * 1000) {
            return data;
        }
    }
    return null;
};

export const setLocalStorageData = (data) => {
    const cachedDataToStore = {
        timestamp: new Date().getTime(),
        data: data?.list,
    };
    localStorage.setItem("weatherData", JSON.stringify(cachedDataToStore));
};
