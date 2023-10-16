import React,{useState} from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {


  
  const [weatherData,setWeatherData]= useState({ready:false});

  function handleResponse(response){
console.log(response.data);
setWeatherData({
  ready:true,
  temperature:response.data.main.temp,
  humidity:response.data.main.humidity,
  wind:response.data.wind.speed,
  city:response.data.name,
  description:response.data.weather[0].description,
  iconUrl:"https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
  date:"Wednesday 7:00",

})

  }
  if(weatherData.ready){
return (
    <div className="Weather">
      <div className="container">
        <div className="card">
          <div className="row">
            <div className="container-2">
              <form className="row g-3">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder="Enter your city ..."
                    id="searchtext"
                    autocomplete="off"
                  />
                </div>
                <div className="col-3">
                  <button type="submit" className="btn btn-success w-90">
                    Search
                  </button>
                </div>
              </form>
              <div className="descr">
                <div className="row">
                
                <div className="col-8"> <h1> {weatherData.city} </h1> </div>
                <div className="col-8">{weatherData.date}</div>
                <div className="col-6 text-capitalize"> {weatherData.description}</div>
              </div>
              
              

              <br />

              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={weatherData.iconUrl}
                    alt={weatherData.description}
                  />
                </div>

                <div className="col-md-4">
                  <h5 className="card-title">
                    Humidity : <span> {weatherData.humidity} </span> %
                  </h5>
                  <p className="card-text">
                    Wind : <span>{weatherData.wind} </span>km/h
                  </p>
                </div>
              </div>

              <br />

              <div className="row">
                <div className="class-degre">
                   <span className="temperature"> {Math.round(weatherData.temperature)}</span> <span className="units">°C </span>
                </div>
              </div>
              <div cclassName="forecast"></div>
              </div>
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
  const apiKey ="94cd4c88359bbfa73c8c4de8f49c0991";
  
  let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return "Loading...";
  }

 
  
}
