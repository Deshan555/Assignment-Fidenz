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

    const windIconStyle = {
        transform: `rotate(${140 + deg}deg)`,
    };
    const displayCard = () => {
        return (
            <Link to={`/city/${id}`} className="links">
                <div className="gx-2">
                    <div className="card w-75 weather-card"
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
                                            <center>
                                                <div id="windicon" className="flex">
                                                    <svg style={windIconStyle} xmlns="http://www.w3.org/2000/svg"
                                                         viewBox="0 0 24 24">
                                                        <g>
                                                            <path fill="none" d="M0 0h24v24H0z"/>
                                                            <path
                                                                d="M1.923 9.37c-.51-.205-.504-.51.034-.689l19.086-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.475.553-.717.07L11 13 1.923 9.37zm4.89-.2l5.636 2.255 3.04 6.082 3.546-12.41L6.812 9.17z"
                                                                fill="#ffffff"/>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <h5 className="list-font">{`${speed} m/s, ${deg} deg`}</h5>
                                            </center>
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


