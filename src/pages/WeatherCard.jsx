import React from 'react';

import Header from '../components/Header/header';

import Footer from '../components/Footer/footer';

import SingleCard from '../components/SingleCard/singleCard';

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