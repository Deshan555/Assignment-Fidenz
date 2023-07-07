import React, {useState, useEffect} from "react";
import cities from "./cities.json";
import Card from "../Card/card";
import { fetchWeatherData} from "../../services/ApiHandler";


const CardHolder = () => {
    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        const getWeatherData = async () => {
            const cityCodes = cities.List.map(city => city.CityCode);
            try{
                const data = await fetchWeatherData(cityCodes);
                setWeatherData(data?.list);
            } catch (error){
                console.log("Error Occurred : "+error);
            }
        };
        cities?.List?.length !== 0 && getWeatherData();
    },[]);

    const cardList = weatherData.map((cityData) => (
        <Card key={cityData?.id} {...cityData} />
    ));

    const displayCards = () => (
        <div id="cards" className="container mt-5 my-3">
            <div className="row row-cols-1 row-cols-md-2 g-4" id="weather-container">
                { cardList }
            </div>
        </div>
    );

    let template;
    if (weatherData) {
        template = displayCards();
    } else {
        template = <div>Loading...</div>;
    }

    return template;
};

export default CardHolder;
