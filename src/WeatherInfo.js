import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo (props){
return (
<div className="WeatherInfo">
<div className="descr">
                <div className="row">
                
                <div className="col-8"> <h1> {props.data.city} </h1> </div>
                <div className="col-8"> <FormattedDate date={props.data.date}/>  </div>
                <div className="col-6 text-capitalize"> {props.data.description}</div>
              </div>
              
              

              <br />

              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={props.data.iconUrl}
                    alt={props.data.description}
                  />
                </div>

                <div className="col-md-4">
                  <h5 className="card-title">
                    Humidity : <span> {props.data.humidity} </span> %
                  </h5>
                  <p className="card-text">
                    Wind : <span>{props.data.wind} </span>km/h
                  </p>
                </div>
              </div>

              <br />

              <div className="row">
                <div className="class-degre">
                   <span className="temperature"> {Math.round(props.data.temperature)}</span> <span className="units">°C </span>
                </div>
              </div>
              <div cclassName="forecast"></div>
              </div>
</div>
);
}