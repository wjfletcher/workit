import React, { Component } from 'react';

class Exercise extends Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div className="callout">
      <li>
        <h3>{this.props.name}</h3>
        <p>{this.props.description}</p>
      </li>
      </div>
    )
  }
};

export default Exercise;
