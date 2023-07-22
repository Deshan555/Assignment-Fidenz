import React, { useEffect, useState } from "react";
import cities from "./cities.json";
import Card from "../Card/card";
import { fetchWeatherData } from "../../services/ApiHandler";
import {
    getCachedData,
    setCachedData,
    isExpired,
    setRequiredData,
} from "../../utils/LocalStorageHandler";

const CardHolder = () => {
    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        (async () => {
            const cachedData = getCachedData();
            const cityData =
                Array.isArray(cachedData) && cachedData.length > 0
                    ? cachedData
                    : cities.List;
            if (cityData) {
                const expiredCityData = [];
                const notExpiredCityData = [];

                cityData.forEach((element) => {
                    if (isExpired(element, "timestamp", "expirationTime"))
                        expiredCityData.push(element.CityCode);
                    else notExpiredCityData.push(element);
                });

                if (expiredCityData.length === 0) setWeatherData(notExpiredCityData);
                else {
                    const data = await fetchWeatherData(expiredCityData);
                    const dataWithExpTime = setRequiredData(data?.list, cities?.List);
                    const validData = [...notExpiredCityData, ...dataWithExpTime];
                    setWeatherData(validData);
                    setCachedData(validData);
                }
            }
        })();
    }, []);

    const cardList = weatherData.map((cityData) => (
        <Card key={cityData?.id} {...cityData} />
    ));

    const displayCards = () => (
        <center>
            <div id="cards" className="container mt-5">
                <div className="row row-cols-sm-2 g-2" id="weather-container">
                    {cardList}
                </div>
            </div>
        </center>
    );

    return weatherData ? displayCards() : <div>Loading Data...</div>;
};

export default CardHolder;
