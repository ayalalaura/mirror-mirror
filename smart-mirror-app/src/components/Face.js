import React, { Component } from 'react';

class Face extends Component {

  render() {

    return(
      <div className="floating-face">
        <img className="face" src={'../mirror-spirit.png'} alt="Mirror Spirit" style={{width: 440, height: 584, position: 'absolute'}}/>
      </div>
    )
  }

}

export default Face;
