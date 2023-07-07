import React, {useEffect, useState} from "react";
import cities from "./cities.json";
import Card from "../Card/card";
import {fetchWeatherData} from "../../services/ApiHandler";
import {getLocalStorageData, setLocalStorageData} from "../../utils/LocalStorageUtils";

const CardHolder = () => {
    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        const getWeatherData = async () => {
            const cityCodes = cities.List.map((city) => city.CityCode);
            try {
                const cachedData = getLocalStorageData();
                if (cachedData) {
                    setWeatherData(cachedData);
                    return;
                }
                const data = await fetchWeatherData(cityCodes);
                setLocalStorageData(data);
                setWeatherData(data?.list);
            } catch (error) {
                console.log("Error Occurred: " + error);
            }
        };

        cities?.List?.length !== 0 && getWeatherData();
    }, []);

    const cardList = weatherData.map((cityData) => (
        <Card key={cityData?.id} {...cityData} />
    ));

    const displayCards = () => (
        <div id="cards" className="container mt-5 my-3">
            <div className="row row-cols-1 row-cols-md-2 g-4" id="weather-container">
                {cardList}
            </div>
        </div>
    );

    return weatherData ? displayCards() : <div>Loading Data...</div>;
};

export default CardHolder;
