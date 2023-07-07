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
                wind: { speed },
                sys: { sunrise, sunset },
                weather: [{ description, icon }],
            },
        ] = weatherData;

        return (
            <div className="container">
                <div id="cards" className="d-flex justify-content-center">
                    <div className="" id="weather-container">
                        <div>
                            <div
                                className="card weather-card"
                                style={{
                                    background: `url(../../../../../images/1.png) no-repeat, ${RandomColor()}`,
                                }}
                            >
                                <Link to={`/`} className="links">
                                    <i className="bi bi-arrow-left back-icon px-2"></i>
                                </Link>
                                <div>
                                    <div className="container text-center">
                                        <div className="row mt-5">
                                            <div className="col-sm-6">
                                                <h3>{name}</h3>
                                                <h5>{timeFormat()}</h5>
                                                <img
                                                    src={`http://openweathermap.org/img/w/${icon}.png`}
                                                    alt="weather-icon"
                                                />
                                                <h6>{description}</h6>
                                            </div>
                                            <div className="col-sm-6">
                                                <h2>{Math.round(temp)} &#8451;</h2>
                                                <h6>{`Temp Min: ${Math.round(temp_min)}`} &#8451;</h6>
                                                <h6>{`Temp Max: ${Math.round(temp_max)}`} &#8451;</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="container text-center">
                                        <div className="row">
                                            <div className="col-sm-4 border-end">
                                                <h6>{`Pressure: ${pressure} Hpa`}</h6>
                                                <h6>{`Humidity: ${humidity}%`}</h6>
                                                <h6>{`Visibility: ${visibility}Km`}</h6>
                                            </div>
                                            <div className="col-sm-4 border-end">
                                                <i className="bi bi-arrow-up-right-circle-fill"></i>
                                                <h5>{`Wind: ${speed} m/s`}</h5>
                                            </div>
                                            <div className="col-sm-4">
                                                <h6>{`Sunrise: ${Time_Formatter(sunrise)}`}</h6>
                                                <h6>{`Sunset: ${Time_Formatter(sunset)}`}</h6>
                                            </div>
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
