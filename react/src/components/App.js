import React, { Component }  from 'react';
import WorkoutForm from './WorkoutForm';
import Exercise from './Exercise';

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
    let form, buttonText;
    if (this.state.showWorkoutForm) {
      exercises = this.state.exercises;
      exercises = exercises.map((exercise) => {
        return (
        <option value={exercise.id}>{exercise.name}</option>
        )
      });

      buttonText = "Cancel";
      form = <WorkoutForm
        key = {2}
        workouts = {this.state.workouts}
        dropDown = {exercises}
        formAuth = {this.state.formAuth}
      />;

    } else {
      buttonText = "Add new workout"
      form = null;
    }
    let workouts
    if (this.state.workouts != null) {
    workouts = Object.keys(this.state.workouts).map(workout => {
      let workoutDate = workout
      let exercises = this.state.workouts[workout].map(exercise => {
        let thisExercise;
        this.state.exercises.map(myExercise => {
          if (myExercise.id == exercise.exercise_id) {
            thisExercise = myExercise.name
          };
        })
        return (
          <Exercise
            key = {exercise.id}
            name = {thisExercise}
            reps = {exercise.reps}
            sets = {exercise.sets}
            weight = {exercise.weight}
          />
        );
      });

      return (
        <div>
        <div className="callout workouts">
          <h4>{workoutDate}</h4>
          {exercises}
        </div>
        <br />
        </div>
      )
    });
    }
    return (
      <div>
        {form}
        <button className="button" onClick={this.buttonClick}>{buttonText}</button>
        {workouts}
      </div>
    )
  }
}

export default App;
