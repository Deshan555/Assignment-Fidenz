import { BrowserRouter as Router, Routes as BaseRoutes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WeatherData from "./pages/WeatherCard";

const Routes = () => (
    <Router>
        <BaseRoutes>
            <Route path="/" element={<Home />} />
            <Route path="/city/:cityCode" element={<WeatherData />} />
        </BaseRoutes>
    </Router>
);

export default Routes;
