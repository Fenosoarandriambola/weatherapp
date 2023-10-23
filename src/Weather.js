import React,{useState} from "react";
import "./Weather.css";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {


  
  const [weatherData,setWeatherData]= useState({ready:false});
  const [city,setCity] = useState(props.defaultCity);

  function handleResponse(response){
console.log(response.data);
setWeatherData({
  ready:true,
  temperature:response.data.main.temp,
  humidity:response.data.main.humidity,
  wind:response.data.wind.speed,
  city:response.data.name,
  description:response.data.weather[0].description,
  iconUrl:response.data.weather[0].icon,
  date:new Date(response.data.dt*1000),

})

  }
function search(){
 const apiKey ="94cd4c88359bbfa73c8c4de8f49c0991";
  
  let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event) {
    event.preventDefault();
    search ();
    
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if(weatherData.ready){
return (
    <div className="Weather">
      <div className="container">
        <div className="card">
          <div className="row">
            <div className="container-2">
              <form onSubmit={handleSubmit} >
                <div className="row g-3">
                  <div className="col-9">
                  <input
                    type="search"
                    placeholder="Enter your city ..."
                    id="searchtext"
                    autocomplete="off"
                    onChange={handleCityChange}
                  />
                </div>
                <div className="col-3">
                  <button type="submit" className="btn btn-success w-90">
                    Search
                  </button>
                </div>
                </div>
              </form>
              <WeatherInfo data ={weatherData}/>
              <WeatherForecast/>
              
            </div>
          </div>
        </div>
        This project was coded by Fenosoa Randriambola and is open sourced on 
        <a href="https://github.com/Fenosoarandriambola/weatherapp/commit/9f6e14a6b4d7effb1111535bcb0faf19ed6deca4">
          {" "}
          github url{" "}
         </a>{" "}
      
      </div>
    </div>
  );
  } else {
 search()
  return "Loading...";
  }

 
  
}
