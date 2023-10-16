import React from "react";
import "./Weather.css";
export default function Weather() {
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
                
                <div className="col-8"> <h1> Mauritius </h1> </div>
                <div className="col-8">Thursday 17:53</div>
                <div className="col-6"> Cloudy</div>
              </div>
              
              

              <br />

              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1779/1779940.png"
                    alt="image"
                  />
                </div>

                <div className="col-md-4">
                  <h5 className="card-title">
                    humidity : <span> 80 </span> %
                  </h5>
                  <p className="card-text">
                    Wind : <span>30 </span>km/h
                  </p>
                </div>
              </div>

              <br />

              <div className="row">
                <div className="class-degre">
                   <span className="temperature"> 19</span> <span className="units">°C </span>
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
}
