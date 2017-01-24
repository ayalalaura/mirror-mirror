import React, { Component } from 'react';
import Moment from 'moment'; // for date/time objects

class Clock extends Component {

  // constructor - initial state holds date and time
  constructor(props) {
    super(props);
    this.state = {
      dateNow: Moment().format('dddd, MMMM Do').toString(),
      timeNow: Moment().format('LT').toString()
    };
  }


  // function to set date/time
  // Great explanation of using Moment.js in React http://stackoverflow.com/questions/34621442/where-to-apply-my-moment-function-in-a-react-component
  getTime = () => {
      this.setState({
        dateNow: Moment().format('dddd, MMMM Do').toString(),
        timeNow: Moment().format('LT').toString()
      });
  }


  // interval to update time
  componentDidMount() {
    this.interval = setInterval(this.getTime, 1000); // every second
  }


  // clear the interval
  componentWillUnmount() {
    clearInterval(this.interval);
  }


  // render function for the component
  render() {
    const date = this.state.dateNow;
    const time = this.state.timeNow;

    return (
      <div className="date-object">
        <p className="date">{date}</p>
        <p className="time">{time}</p>
      </div>
    );
  }
}

export default Clock;
