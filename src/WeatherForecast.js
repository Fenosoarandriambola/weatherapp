import React, {useState} from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props){
 let [loaded,setLoaded]   = useState(false);
 let [forecast,setForecast] = useState(null);

function handleResponse(response){

setForecast(response.data.daily);
setLoaded(true);

}

if (loaded){
    console.log(forecast);
 return (
        <div className="WeatheForecast">
            <div className="row">
                <div className="col">
                    <WeatherForecastDay data={forecast[0]}/>
                    

                </div>

            </div>

        </div>
    );

} else {
    
    let apiKey ="94cd4c88359bbfa73c8c4de8f49c0991";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
   axios.get(apiUrl).then(handleResponse);
     return null;
}
}