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
        <div className="row">

          <div className="column small-12 medium-3 large-3">
            <img className="exercise-image" src={this.props.image}></img>
          </div>
          <div className="column small-12 medium-9 large-9">
            <li>
              <h3>{this.props.name}</h3>
              <p>{this.props.description}</p>
            </li>
          </div>
        </div>
      </div>
    )
  }
};

export default Exercise;
