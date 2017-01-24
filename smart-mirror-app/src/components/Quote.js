import React, { Component } from 'react';
// import Request from 'superagent'; // making api calls

// superagent docs
// https://visionmedia.github.io/superagent/#request-basics

class Quote extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentWillMount() {
  //   // AJAX call to the inspirational quote API
  //   // setState for quote
  // }

  // updateQuote() {
  //   // another AJAX call every 12 hours to update state
  // }

  // renderQuote() {
  //   // rendering the quote
  // }

  render() {
    return (
      // return {this.state.renderQuote} & {this.state.updateQuote}
      <div className="greeting">
        <p className="question">What wouldst thou know my queen?</p>
      </div>
    )
  }

}

export default Quote;
