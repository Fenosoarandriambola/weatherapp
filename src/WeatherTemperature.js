import React, {useState} from"react";
export default function WeatherTemperature(props){
    const [units,setUnits]=useState("celsius");

    function showFahrenheit(event){
        event.preventDefault();
        setUnits("fahrenheit");
    }
function showCelsius(event){
        event.preventDefault();
        setUnits("celsius");
    }

function fahrenheit(){
    return (props.celsius * 9/5) + 32
}

    if (units === "celsius"){
return (
     <div className="row">
                <div className="class-degre">

                   <span className="temperature"> {Math.round(props.celsius)}</span> 
                   <span className="units"> °C | {""} <a href ="/" onClick={showFahrenheit}>°F  </a>
                </span>
                </div>
     </div>
  );
    } else {
         
        return (
                <div className="class-degre">

                   <span className="temperature"> {Math.round(fahrenheit())}</span> 
                   <span className="units"> <a href ="/" onClick={showCelsius}>  °C </a>{""}|°F
                </span>
                </div>

        );
    }
  
    
}