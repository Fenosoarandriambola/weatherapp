import React, {useState,useEffect} from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props){
 let [loaded,setLoaded]   = useState(false);
 let [forecast,setForecast] = useState(null);
useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

function handleResponse(response){
    console.log(response);

setForecast(response.data.daily);
setLoaded(true);

}

if (loaded){
    console.log(forecast);
 return (
        <div className="WeatheForecast">
            <div className="row">
                {forecast.map(function(dailyForecast,index){
                    if (index < 5){
                      return(
                    <div className="col" key={index}>
                     
                    <WeatherForecastDay data={dailyForecast}/> 

                    </div>);
                    } else { return null;
                }})}
                
                
                

            </div>

        </div>
    );

} else {
    
    let apiKey ="5f472b7acba333cd8a035ea85a0d4d4c";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
   axios.get(apiUrl).then(handleResponse);
     return null;
}
}