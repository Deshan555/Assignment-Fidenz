import React, {useEffect, useState} from "react";
import {fetchWeatherData} from "../../services/ApiHandler";
import {useParams} from "react-router-dom";
import WeatherTemplate from "../WeatherTemplate/WeatherTemplate";

function SingleCard({customStyles}) {
    const {cityCode} = useParams();
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const getWeatherData = async () => {
            try {
                const weatherData = await fetchWeatherData(cityCode);
                setWeatherData(weatherData?.list);
            } catch (error) {
                console.error(error);
            }
        };
        cityCode && getWeatherData();
    }, [cityCode]);

    const customCardStyles = {
        display: "inline"
    };

    const fonts = {}

    return weatherData && cityCode ? (
        <center>
            <WeatherTemplate data={weatherData[0]} customStyles={customCardStyles}/>
        </center>

    ) : (
        <div>Loading Please Wait...</div>
    );
}

export default SingleCard;
