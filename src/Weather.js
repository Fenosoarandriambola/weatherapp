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
                  <button type="submit" className="btn btn-success w-95">
                    Search
                  </button>
                </div>
              </form>
              <div className="row">
                <div className="col-8"> Mauritius </div>
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
                  <strong> </strong> <span className="units"> 19°C</span>
                </div>
              </div>
              <div cclassName="forecast"></div>
            </div>
          </div>
        </div>
        <a href="https://github.com/Fenosoarandriambola/weatherapp/commit/9f6e14a6b4d7effb1111535bcb0faf19ed6deca4">
          {" "}
          github url{" "}
        </a>{" "}
        by Fenosoa Randriambola
      </div>
    </div>
  );
}
