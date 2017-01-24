import React, { Component } from 'react';
import Skycons from 'react-skycons';

class Skycon extends Component {

  // I want to get props from the Weather component
  // set state of this component equal to this.props.icon
  // inside of the render function or as a separate function, create nested if/else ifs checking the values of icon text to the version Skycons recognizes
  // render/return Skycons tag with the appropriate icon name
  // return Skycons in a div and resize as default sizing for the skycons is preset at 100% height & width



  constructor(props) {
    super(props);
    this.state = {
      // skycon: this.props.icon
    };
  }

  renderSkycon(props){

    if (this.props.weather){
      const obj = this.props.weather;
      // console.log(obj);

      let image = obj.icon;
      // console.log(image);

      if(image === "clear-day"){
        return "CLEAR_DAY";
      } else if (image === "clear-night"){
        return "CLEAR_NIGHT";
      } else if (image === "rain"){
        return "RAIN";
      } else if (image === "snow"){
        return "SNOW";
      } else if (image === "sleet"){
        return "SLEET";
      } else if (image === "wind"){
        return "WIND";
      } else if (image === "fog"){
        return "FOG";
      } else if (image === "cloudy"){
        return "CLOUDY";
      } else if (image === "partly-cloudy-day"){
        return "PARTLY_CLOUDY_DAY";
      } else if (image === "partly-cloudy-night"){
        return "PARTLY_CLOUDY_NIGHT";
      } else if (image === "hail" || image === "thunderstorm" || image === "tornado"){
        return "RAIN"
      }

    } else {
      return "CLEAR_DAY";
    }
  }

  render() {

    return (
      <div className="skycon">
        <Skycons color='white' icon={this.renderSkycon()} />
      </div>
    );

  }

}

export default Skycon;
