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
          steps: body["activities-steps"][0].value
        });
      });
  }

  render() {
    return(
      <div><h1> Your Steps Today </h1>
      <h3>{this.state.steps}</h3>
      <button className="button" type="button" onClick={this.getFitbit}>Update</button>
      </div>
    )
  }
}

export default Fitbit;
