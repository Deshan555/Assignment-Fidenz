// Card.jsx
import React from "react";
import { Link } from "react-router-dom";
import WeatherTemplate from "../WeatherTemplate/WeatherTemplate";

function Card(props) {
    const { id } = props;


    const customCardStyles = {
        display: "none"
    };

    return (
        <Link to={`/city/${id}`} className="links">
            <div className="gx-2">
                <WeatherTemplate data={props} customStyles={customCardStyles}/>
            </div>
        </Link>
    );
}

export default Card;