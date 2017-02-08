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
      <li className="exerciselist">
        {this.props.name} - {this.props.description}
      </li>
      </div>
    )
  }
};

export default Exercise;
