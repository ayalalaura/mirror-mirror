import React, { Component } from 'react';
import Request from 'superagent'; // making api calls
import Skycon from './Skycon';

// superagent docs
// https://visionmedia.github.io/superagent/#request-basics

class Weather extends Component {

 constructor(props) {
    super(props);
    this.state = {};
  }

  // before App component loads, make the api calls and setState equal to the response objects
  componentWillMount(){
    // Dark Sky API gives CORS issues, appending proxy site to URL:
    // https://blog.codepen.io/2015/07/10/crossorigin-me/
    // Put this right before the url: http://crossorigin.me/
    // Currently using Chrome Enable CORS extension (Allow-Control-Allow-Origin: *)
    // Another option: https://cors-anywhere.herokuapp.com/
    const darkSkyAPI = "http://crossorigin.me/https://api.darksky.net/forecast/MY_KEY/MY_LAT,MY_LON?exclude=minutely,daily,alerts,flags";
    Request.get(darkSkyAPI).then((response) => {
      this.setState({
        // split weather into two objects for "easier" parsing
        weatherNow: response.body.currently,
        weatherLater: response.body.hourly
      });
    });
  } // end of componentWillMount()


  // function to update state with setTimeout
  updateWeather(){
     // re-calling weather api and setting state
     setTimeout(() => {
        const url = "http://crossorigin.me/https://api.darksky.net/forecast/MY_KEY/MY_LAT,MY_LON?exclude=minutely,daily,alerts,flags";
      Request.get(url).then((response) => {
        this.setState({
          weatherNow: response.body.currently,
          weatherLater: response.body.hourly
        });
      });
    }, 600000); // 10 min
  } // end of updateWeather()


  // getting deeper into the JSON objects to render values
  renderWeather(){
     if (this.state.weatherNow) { // checking that state contains weather
      const current = this.state.weatherNow;
      console.log(current); // double-check timing
      const hourly = this.state.weatherLater;

      return (
        <div className="weather">
          <div className="temp">
            <p className="current-temp">{Math.round(current.temperature)}&deg;F</p>
          </div>
          <div className="summary">
            <p className="hourly-summary">{hourly.summary}</p>
          </div>
        </div>
      )}
      else {
        return <p> Now loading...</p>
    }
  }

// <Skycon
//           icon={this.state.weatherNow ? this.state.weatherNow.toUpperCase() : 'CLOUDY'}
//         />

  // render function for the component
  render() {

    return (
      <div className="weather-object">
        <Skycon
          weather={this.state.weatherNow}
        />
        { this.updateWeather() }
        { this.renderWeather() }
      </div>
    );
  }

} // end of component

export default Weather;
