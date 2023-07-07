import React, { useState, useEffect } from "react";
import cities from "./cities.json";
import Card from "../Card/card";
import { fetchWeatherData } from "../../services/ApiHandler";

const CardHolder = () => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const getWeatherData = async () => {
      const cityCodes = cities.List.map((city) => city.CityCode);
      try {
        // Check if data is available in local storage
        const cachedData = localStorage.getItem("weatherData");
        if (cachedData) {
          const parsedData = JSON.parse(cachedData);
          const currentTime = new Date().getTime();
          const { timestamp, data } = parsedData;
          // Check if cached data is not expired (5 minutes expiration)
          if (currentTime - timestamp < 5 * 60 * 1000) {
            setWeatherData(data);
            return;
          }
        }
        // Fetch data from API
        const data = await fetchWeatherData(cityCodes);
        // store data in local storage
        const cachedDataToStore = {
          timestamp: new Date().getTime(),
          data: data?.list,
        };
        localStorage.setItem("weatherData", JSON.stringify(cachedDataToStore));

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
