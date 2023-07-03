import React from 'react';

import { Time_Formatter } from '../../../services/Functions';

import { timeFormate } from '../../../services/Functions';

import { RandomColor } from '../../../services/Functions';

import { Link } from 'react-router-dom';

import { useParams } from 'react-router-dom';

function SingleCard(props) {

    const { country, temperature, minTemp, maxTemp, pressure, humidity, visibility, wind, sunrise, sunset, weatherDescription, weatherIcon, city } = useParams();

    const time = timeFormate();

    const randomColor = RandomColor();

    const sunrise_ = Time_Formatter(sunrise);

    const sunset_ = Time_Formatter(sunset);

    const myStyles = {
        backgroundSize: 'cover',
        backgroundColor: randomColor
    };

    return (
        <div class="container">
            <div class="row">
                <div class="col-12 d-flex justify-content-center align-items-center">
                    <div className="card weather-card" >
                        <div className="card-head" style={myStyles}>
                            <div class="mt-3 ml-4">
                                <Link to={`/`} className="links">
                                    <b>
                                        <i class="bi bi-arrow-left back-icon mx-3 back-icon"></i>
                                    </b>
                                </Link>
                            </div>
                            <div className="container text-center">
                                <div className="row mt-5">
                                    <h1>{city},{country}</h1>
                                    <h5 className="list-fonts">{time}</h5>
                                    <div className="row mt-4 mb-4">
                                        <div className="col-sm-6  border-end">
                                            <img src={`http://openweathermap.org/img/w/${weatherIcon}.png`} alt="weather-icon" />
                                            <h5>{weatherDescription}</h5>
                                        </div>
                                        <div className="col-sm-6">
                                            <h1>{temperature} &#8451;</h1>
                                            <h6 className="list-fonts"><b>Temp Min: </b>{minTemp} &#8451;</h6>
                                            <h6 className="list-fonts"><b>Temp Max: </b>{maxTemp} &#8451;</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-body rounded-bottom">
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
                                            <h5 className="list-fonts"><b></b>{wind}</h5>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 mt-4">
                                        <h6 className="list-fonts"><b>Sunrise: </b>{sunrise_}</h6>
                                        <h6 className="list-fonts"><b>Sunset: </b>{sunset_}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default SingleCard;

