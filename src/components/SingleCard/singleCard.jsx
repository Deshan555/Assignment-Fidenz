import React, { useEffect, useState } from "react";
import { fetchWeatherData } from "../../services/ApiHandler";
import { Link } from "react-router-dom";
import { RandomColor, timeFormat, Time_Formatter } from "../../services/Functions";
import { useParams } from 'react-router-dom';

function SingleCard(){
    const { cityCode } = useParams();
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


    function displayWeatherData(){
        const [
            {
                name,
                visibility,
                main: { temp, temp_min, temp_max, pressure, humidity },
                wind: { speed, deg },
                sys: { sunrise, sunset, country },
                weather: [{ description, icon }],
            },
        ] = weatherData;

        const myStyles = {
            backgroundSize: 'cover',
            backgroundColor: RandomColor(),
        };

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center align-items-center">
                        <div className="card weather-card"  style={myStyles}>
                            <div className="card-head">
                                <div className="mt-3 ml-4">
                                    <Link to={`/`} className="links">
                                        <b>
                                            <i className="bi bi-arrow-left back-icon mx-3 back-icon"></i>
                                        </b>
                                    </Link>
                                </div>
                                <div className="container text-center">
                                    <div className="row mt-5">
                                        <h1>{name},{country}</h1>
                                        <h5 className="list-fonts">{timeFormat()}</h5>
                                        <div className="row mt-4 mb-4">
                                            <div className="col-sm-6  border-end">
                                                <img src={`http://openweathermap.org/img/w/${icon}.png`}
                                                     alt="weather-icon"/>
                                                <h5>{description}</h5>
                                            </div>
                                            <div className="col-sm-6">
                                                <h1>{temp} &#8451;</h1>
                                                <h6 className="list-fonts"><b>Temp Min: </b>{temp_min} &#8451;</h6>
                                                <h6 className="list-fonts"><b>Temp Max: </b>{temp_max} &#8451;</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body rounded-bottom rounded-lg">
                                <div className="container text-center">
                                    <div className="row">
                                        <div className="col-sm-4 border-end">
                                            <h6 className="list-font"><b>Pressure: </b>{pressure} Hpa</h6>
                                            <h6 className="list-font"><b>Humidity: </b>{humidity}%</h6>
                                            <h6 className="list-font"><b>Visibility: </b>{visibility}Km</h6>
                                        </div>
                                        <div className="col-sm-4 border-end">
                                            <div className="mt-2">
                                                <i className="bi bi-arrow-up-right-circle-fill icon"></i>
                                                <h5 className="list-fonts"><b></b>{ speed+"m/s, "+deg+" deg" }</h5>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 mt-4">
                                            <h6 className="list-fonts"><b>Sunrise: </b>{ Time_Formatter(sunrise) }</h6>
                                            <h6 className="list-fonts"><b>Sunset: </b>{ Time_Formatter(sunset) }</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return weatherData && cityCode ? (displayWeatherData()) : (<div>Loading Please Wait...</div>);
}

export default SingleCard;
