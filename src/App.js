import React from 'react';

import Home from './components/pages/Home';

import WeatherData from './components/pages/WeatherCard';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';


const App = () => {

    return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/weather/:cityCode" element={<WeatherData />} />
      </Routes>
    </Router>
  );
};

export default App;