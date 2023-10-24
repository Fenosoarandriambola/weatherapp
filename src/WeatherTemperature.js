import React from"react";
export default function WeatherTemperature(props){
return (
     <div className="row">
                <div className="class-degre">

                   <span className="temperature"> {Math.round(props.celsius)}</span> 
                   <span className="units"> °C </span>
                </div>
     </div>
  );
  
}