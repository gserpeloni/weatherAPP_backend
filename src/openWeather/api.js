const axios = require('axios');
const baseURL = "http://api.openweathermap.org/data/2.5"
require('dotenv').config();



module.exports={
   
 async getWeatherByCity(req, res){
    const cityName = req.params.city;
    const apikey= process.env.API_KEY
    const result = await axios.get(baseURL+`/weather?q=${cityName}&appid=${process.env.API_KEY}&units=metric`);
    return res.json(result.data);
  },


  async getWeatherByZipCode(req, res){
    const zipcode = req.params.zipcode;
    console.log(zipcode)
    //In the front end i need to pit a select box to select the country
    const result = await axios.get(baseURL+`/weather?zip=${zipcode}&appid=${process.env.API_KEY}&units=metric`);
    return res.json(result.data);
  }

}





