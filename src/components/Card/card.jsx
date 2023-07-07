import React from "react";
import {RandomColor, Time_Formatter, timeFormat} from '../../services/Functions';
import {Link} from 'react-router-dom';

function Card(props) {

    const {
        id,
        name,
        visibility,
        main: {temp, temp_min, temp_max, pressure, humidity},
        wind: {speed, deg},
        sys: {sunrise, sunset, country},
        weather: [{description, icon}],
    } = props;

    const displayCard = () => {
        return (
            <Link to={`/city/${id}`} className="links">
                <div>
                    <div className="card weather-card"
                         style={{
                             background: `url(../../../../../images/1.png) no-repeat, ${RandomColor()}`,
                         }}>
                        <div className="card-head">
                            <div className="container text-center">
                                <div className="row mt-5">
                                    <div className="col-sm-6">
                                        <h5>{name},{country}</h5>
                                        <h5 className="list-font">{timeFormat()}</h5>
                                        <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="weather-icon"/>
                                        <span>{description}</span>
                                    </div>
                                    <div className="col-sm-6">
                                        <h4>{temp} &#8451;</h4>
                                        <h6 className="list-font"><b>Temp Min: </b>{temp_min} &#8451;</h6>
                                        <h6 className="list-font"><b>Temp Max: </b>{temp_max} &#8451;</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-body rounded-bottom">
                            <div className="container text-center">
                                <div className="row">
                                    <div className="col-sm-4 border-end">
                                        <div>
                                            <ul className="list-unstyled">
                                                <li className="list-font"><b>Pressure: </b>{pressure} Hpa</li>
                                                <li className="list-font"><b>Humidity: </b>{humidity}%</li>
                                                <li className="list-font"><b>Visibility: </b>{visibility}Km</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 border-end">
                                        <div className="mt-4">
                                            <i className="bi bi-arrow-up-right-circle-fill"></i>
                                            <h5 className="list-font">{speed + " m/s," + deg + " deg"}</h5>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 mt-4">
                                        <h6 className="list-font"><b>Sunrise: </b>{Time_Formatter(sunrise)}</h6>
                                        <h6 className="list-font"><b>Sunset: </b>{Time_Formatter(sunset)}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        );
    };

    return displayCard();
}

export default Card;


