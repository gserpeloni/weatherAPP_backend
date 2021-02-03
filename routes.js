const express = require('express');
const routes = express.Router();
const openWeather = require('./src/openWeather/api');



routes.get('/api/:city', openWeather.getWeatherByCity)
routes.get('/api/zipcode/:zipcode', openWeather.getWeatherByZipCode)

module.exports = routes;

