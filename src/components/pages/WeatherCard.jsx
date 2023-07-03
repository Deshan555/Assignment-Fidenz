import React from 'react';

import Header from './Header/header';

import Footer from './Footer/footer';

import SingleCard from './SingleCard/singleCard';

function WeatherData(){

    return (
        <div>
            <Header />

            <SingleCard />
         
            <Footer />
        </div>
    );
}

export default WeatherData;