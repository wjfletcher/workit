import React, { Component }  from 'react';
import WorkoutForm from './WorkoutForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workouts: null,
      exercises: null,
      showWorkoutForm: false,
      formAuth: null
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
          exercises: body.exercises,
          formAuth: body.formauth,
          workouts: body.workouts
        });
      });
  }

  render() {
    let exercises = '';
    if (this.state.showWorkoutForm) {
      exercises = this.state.exercises;
      exercises = exercises.map((exercise) => {
        return (
        <option value={exercise.id}>{exercise.name}</option>
        )
      });
      return (

        <div>
        <WorkoutForm
          workouts = {this.state.workouts}
          dropDown = {exercises}
          formAuth = {this.state.formAuth}
        />

        <button className="button" onClick={this.buttonClick}>Cancel</button>
        </div>
      )
    } else {

      return (
        <div>
          <button className="button" onClick={this.buttonClick}>Add new exercise</button>
        </div>
      );
    }
  }
}

export default App;
