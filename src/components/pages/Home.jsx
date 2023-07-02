import React from 'react';

import Header from './Header/header';

import Footer from './Footer/footer';

import Weather from './CardHolder/weather';

import Finder from './Finder/finder';

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