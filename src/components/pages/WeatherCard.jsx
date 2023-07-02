import React from 'react';

import Header from './Header/header';

import Footer from './Footer/footer';

import SingleCard from './SingleCard/singleCard';

import { useParams } from 'react-router-dom';

function WeatherData(){

    const { cityCode } = useParams();

    console.log(cityCode);

    return (
        <div>
            <Header />

            <SingleCard cityCode={cityCode} />
         
            <Footer />
        </div>
    );
}

export default WeatherData;