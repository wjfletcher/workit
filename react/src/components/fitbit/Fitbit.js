import React, { Component }  from 'react';

class Fitbit extends Component {
  constructor(props) {
    super(props);
    this.state = {
    steps: null
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.getFitbit = this.getFitbit.bind(this);
  }

  componentDidMount() {
    this.getFitbit();
  }

  getFitbit () {
    fetch(`/fitbit/steps/today.json`, {
      credentials: 'same-origin'
    })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status}, (${response.statusText})`;
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({
          steps: body["activities-steps"]
        });
      });
  }

  render() {
    let steps;
    let totalSteps = 0;
    if (this.state.steps) {
    steps = this.state.steps.map(step => {
      totalSteps += parseInt(step.value);
    });
    steps = totalSteps / this.state.steps.length;
    steps = Math.round(steps);
    }
    return(
      <div><h1 className="black-ops"> Average Steps Last 7 Days </h1>
      <h2 className="white-text">{steps}</h2>
      </div>
    )
  }
}

export default Fitbit;
