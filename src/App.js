import React from 'react';
import Routes from './Routes';
import './App.css';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Routes/>
            <Footer/>
        </div>
    );
};

export default App;