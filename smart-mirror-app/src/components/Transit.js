import React, { Component } from 'react';
import Request from 'superagent';
// import fetch from 'node-fetch'; // Mta library below uses fetch
// import Mta from 'mta-gtfs';

// https://www.npmjs.com/package/mta-gtfs

class Transit extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {

            // using John's awesome MTA API https://github.com/JohnrBell/mta_do
            const url = "http://mtastat.us/api/trains";
            Request.get(url).then((response) => {
                const trains = JSON.parse(response.text);
                this.setState({
                    twoStatus: trains[1],
                    fiveStatus: trains[4]
                });
            });

        } // end of componentWillMount

    // function to update state with setTimeout
    updateTrains(){

       // re-calling mta api and setting state
       setTimeout(() => {

        const url = "http://mtastat.us/api/trains";
            Request.get(url).then((response) => {
                const trains = JSON.parse(response.text);
                this.setState({
                    twoStatus: trains[1],
                    fiveStatus: trains[4]
                });
            });

       }, 180000); // 3 min

    } // end of updateTrains()


    // // rendering train details - IT WORKS!
    renderTrains() {
        // put both train status in an array and loop over both with the if/else inside each loop to print correct for each
        if (this.state.twoStatus && this.state.fiveStatus) {
            const trainArray = [];
            const two = this.state.twoStatus;
            const five = this.state.fiveStatus;
            trainArray.push(two, five); // an array holding both train objects
            // console.log(trainArray);
            // console.log(two);

            let twoTrain = two.status === "all good." ?
                <p className="two-status"> <span className="two-symbol"> { two.name } </span> On Time </p> : <p className="two-status"> <span className="two-symbol">{ two.name }</span> Delays </p>


            let fiveTrain = five.status === "all good." ?
                <p className="five-status"> <span className="five-symbol">{ five.name }</span> On Time </p> : <p className="five-status"> <span className="five-symbol">{ five.name }</span> Delays </p>

            // if (two.status === "all good.") {
            //     twoTrain = < p > { two.name }: On Time < /p>

            // } else {
            //     twoTrain = < p > { two.name }: Delays < /p>
            // }

            // if (five.status === "all good.") {
            //     fiveTrain = < p > { five.name }: On Time < /p>
            // } else {
            //     fiveTrain = < p > { five.name }: Delays < /p>
            // }

            return <div className="trains">
                    { twoTrain }
                    { fiveTrain }
                   </div>;

        } else {
            return <p > Something isn 't right...checking train status.</p>
        }
    }


    // render function for the component
    render() {
            return ( <div className="transit-object">
              { this.renderTrains() }
              { this.updateTrains() }
              </div>
            );
    }

        } // end of component

    export default Transit;
