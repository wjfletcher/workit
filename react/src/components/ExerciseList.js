import React, { Component } from 'react';
import WorkoutForm from './WorkoutForm';

class ExerciseList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: null,
      showWorkoutForm: false
    };
    this.buttonClick = this.buttonClick.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.getExercises = this.getExercises.bind(this);
  }

  componentDidMount() {
    this.getExercises();
  }

  buttonClick() {
    let show = !this.state.showWorkoutForm;
    this.setState({ showWorkoutForm: show });
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
    if (this.state.showWorkoutForm) {
      debugger;
      exercises = this.state.exercises;
      exercises = exercises.map((exercise) => {
        return (
          <div>
          {exercise.name}
          </div>
        )
      });
    }

    return (
      <div>
        {exercises}
        < WorkoutForm />
        <button onClick={this.buttonClick}>Show exercises</button>
      </div>
    );
  }
}

export default ExerciseList;
