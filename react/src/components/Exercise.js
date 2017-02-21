import React, { Component } from 'react';

class Exercise extends Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div>
        {this.props.name}: {this.props.sets} X {this.props.reps} X {this.props.weight}lbs{' '}
        <a className="fa fa-pencil-square fa-lg" href="/workouts/12/edit"></a>{' '}
        <a className="fa fa-trash fa-lg" data-confirm="Are you sure you want to delete this workout?" rel="nofollow" data-method="delete" href="/workouts/10"></a>

      </div>
    )
  }
};

export default Exercise;
