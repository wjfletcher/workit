import React, { Component } from 'react';

class ExerciseList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: null,
      showExercises: false
    };
    this.buttonClick = this.buttonClick.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.getExercises = this.getExercises.bind(this);
  }

  componentDidMount() {
    this.getExercises();
  }

  buttonClick() {
    let show = !this.state.showExercises;
    this.setState({ showExercises: show });
  }

  getExercises () {
    fetch(`/api/v1/workouts`, {
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
          exercises: body.exercises
        });
      });
  }

  render() {
    let exercises = '';
    exercises = this.state.exercises;
    if (this.state.showExercises) {
      exercises = exercises.map((exercise) => {
        return (
          <div>
          {exercise.name}
          {exercise.description}
          {exercise.category}
          <button onClick={this.buttonClick}>Hide exercises</button>
          </div>
        )
      });
    } else {
      return (
      <button onClick={this.buttonClick}>Show exercises</button>
    )
    }
    return (
      <div>
      {exercises}
      </div>
    );
  }
}

export default ExerciseList;
