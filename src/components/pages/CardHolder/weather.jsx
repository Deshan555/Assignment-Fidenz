import React from "react";

import Card from "../Card/card";

import cityData from "./cities.json";

function Weather(props) 
{
    const cityCodes = cityData.List.map(city => city.CityCode);

    const cards = [];

    for (let i = 0; i < cityCodes.length; i++) {

        const code = cityCodes[i];

        cards.push(<Card key={code} city={code} />);
    }

    return (
    
    <div id="cards" className="container mt-5 my-3">
        
        <div className="row row-cols-1 row-cols-md-2 g-4" id="weather-container">
        
            {cards}
        
        </div>
    </div>
    );
}

export default Weather;
