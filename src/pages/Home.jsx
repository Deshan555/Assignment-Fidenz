import React from 'react';

import Header from '../components/Header/header';

import Footer from '../components/Footer/footer';

import Weather from '../components/CardHolder/weather';

import Finder from '../components/Finder/finder';

function Home(){

    return (
        <div>
            <Header />
            <Finder />
            <Weather />
            <Footer />
        </div>
    );
}

export default Home;