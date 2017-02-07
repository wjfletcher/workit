import React, { Component }  from 'react';

class Fitbit extends Component {
  constructor(props) {
    super(props);
    this.state = {
    dataset: null
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.getFitbit = this.getFitbit.bind(this);
  }

  componentDidMount() {
    this.getFitbit();
  }

  getFitbit () {
    fetch(`/fitbit/activities.json`, {
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
          dataset: body
        });
      });
  }

  render() {
    debugger;
    return(
      <div>{this.state.dataset}</div>
    )
  }
}

export default Fitbit;
