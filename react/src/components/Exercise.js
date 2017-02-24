import React, { Component } from 'react';

class Exercise extends Component{
  constructor(props) {
    super(props);
    this.state = {

    }
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id) {
    if(confirm("Are you sure?")){
      fetch(`/api/v1/workouts/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin'
      })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => {
        this.props.getExercises();
      });
    }
  }

  render() {
    return(
      <div>
        {this.props.name}: {this.props.sets} X {this.props.reps} X {this.props.weight}lbs{' '}
        <a className="fa fa-pencil-square fa-lg" href={`/workouts/${this.props.id}/edit`}></a>{' '}
        <button className="fa fa-trash fa-lg" onClick={() => { this.handleDelete(this.props.id) }}></button>

      </div>
    )
  }
};

export default Exercise;
