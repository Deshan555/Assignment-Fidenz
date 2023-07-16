import React, {useEffect, useState} from "react";
import cities from "./cities.json";
import Card from "../Card/card";
import {fetchWeatherData} from "../../services/ApiHandler";
import {getCachedData, setCachedData} from "../../utils/LocalStorageHandler";

const CardHolder = () => {
    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        const getWeatherData = async () => {
            const cityDataMap = {};

            cities.List.forEach((city) => {
                const cityCode = city.CityCode;
                const expireTime = city.expirationTime;
                cityDataMap[cityCode] = expireTime;
            });

            try {
                const cachedData = {};
                Object.keys(cityDataMap).forEach((cityCode) => {
                    const cityData = getCachedData(cityCode, cityDataMap[cityCode]);
                    if (cityData) {
                        cachedData[cityCode] = cityData;
                    }
                });

                if (Object.keys(cachedData).length === Object.keys(cityDataMap).length) {
                    setWeatherData(cachedData);
                    return;
                }

                const missingCityCodes = Object.keys(cityDataMap).filter((cityCode) => !cachedData[cityCode]);
                const data = await fetchWeatherData(missingCityCodes);

                const updatedWeatherData = {...cachedData};
                data?.list.forEach((cityData) => {
                    const cityCode = cityData?.id;
                    updatedWeatherData[cityCode] = cityData;
                    setCachedData(cityCode, cityData);
                });
                setWeatherData(updatedWeatherData);
            } catch (error) {
                console.log("Error Occurred: " + error);
            }
        };

        cities?.List?.length !== 0 && getWeatherData();
    }, []);

    const cardList = Object.values(weatherData).map((cityData) => <Card key={cityData?.id} {...cityData} />);

    const displayCards = () => (
        <center>
            <div id="cards" className="container mt-5">
                <div className="row row-cols-1 row-cols-md-2 g-4" id="weather-container">
                    {cardList}
                </div>
            </div>
        </center>
    );

    return weatherData ? displayCards() : <div>Loading Data...</div>;
};

export default CardHolder;
