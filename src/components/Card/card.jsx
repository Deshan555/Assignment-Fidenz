import React, { useEffect, useState } from "react";

import { convertKelvinToCelsius } from '../../services/Functions';

import { timeFormate } from '../../services/Functions';

import { RandomColor } from '../../services/Functions';

import { Time_Formatter } from '../../services/Functions';

import { Link } from 'react-router-dom';

import { fetchWeatherData } from '../../services/ApiHandler';

function Card(props) {

  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {

    fetchWeatherData(props.city)
      .then(weatherData => {
        setWeatherData(weatherData);
      });
  }, []);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const city = weatherData.name;

  const temperature = convertKelvinToCelsius(weatherData.main.temp);

  const minTemperature = convertKelvinToCelsius(weatherData.main.temp_min);

  const maxTemperature = convertKelvinToCelsius(weatherData.main.temp_max);

  const pressure = weatherData.main.pressure;

  const humidity = weatherData.main.humidity;

  const visibility = weatherData.visibility;

  const countryName = weatherData.sys.country;

  const windSpeed = weatherData.wind.speed;

  const deg = weatherData.wind.deg;

  const wind = windSpeed + " m/s, " + deg + " deg";

  const wind_pass = windSpeed + " m;s, " + deg + " deg";

  const sunrise = Time_Formatter(weatherData.sys.sunrise);

  const sunset = Time_Formatter(weatherData.sys.sunrise);

  const weatherDescription = weatherData.weather[0].description;

  const weatherIcon = weatherData.weather[0].icon;

  const time = timeFormate();

  const randomColor = RandomColor();
  
  const myStyles = {
    background: `url(../../../../../images/1.png) no-repeat, ${randomColor}`,
  };

  return (
    <Link
      to={`/${countryName}/${temperature}/${minTemperature}/${maxTemperature}/${pressure}/${humidity}/
      ${visibility}/${wind_pass}/${weatherData.sys.sunrise}/${weatherData.sys.sunset}/${weatherDescription}/${weatherIcon}/${city}`}
      className="links"
    >
      <div>
        <div className="card weather-card">
          <div className="card-head" style={myStyles}>
            <div className="container text-center">
              <div className="row mt-5">
                <div className="col-sm-6">
                  <h5>{city},{countryName}</h5>
                  <h5 className="list-font">{time}</h5>
                  <img src={`http://openweathermap.org/img/w/${weatherIcon}.png`} alt="weather-icon" />
                  <span>{weatherDescription}</span>
                </div>
                <div className="col-sm-6">
                  <h4>{temperature} &#8451;</h4>
                  <h6 className="list-font"><b>Temp Min: </b>{minTemperature} &#8451;</h6>
                  <h6 className="list-font"><b>Temp Max: </b>{maxTemperature} &#8451;</h6>
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
                    <h5 className="list-font">{wind}</h5>
                  </div>
                </div>
                <div className="col-sm-4 mt-4">
                  <h6 className="list-font"><b>Sunrise: </b>{sunrise}</h6>
                  <h6 className="list-font"><b>Sunset: </b>{sunset}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;


