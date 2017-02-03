import React, { Component } from 'react';


class WorkoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    console.log(this.refs.reps.value);

    let date = this.refs.date.value;
    let exercise = this.refs.exercise.value;
    let reps = this.refs.reps.value;
    let sets = this.refs.sets.value;
    let weight = this.refs.weight.value;

    fetch(`/api/v1/workouts`, {
      credentials: 'same-origin',
      method: 'post',
      data: {workout: {date: date, exercise: exercise, reps: reps, sets: sets, weight: weight}},
      success: (response) => {
        console.log('it worked!', response);
      }
    });
  }

  render() {
    return (
      <div className="row center-text">
      <div className="form-element center">
        <form method="post" action="/workouts" >

        <input name="authenticity_token" value={this.props.formAuth} type="hidden" />

        <div className="row">
        <div className="small-12 large-6 columns">
        <div className="field">
        <label htmlFor="workout_date">Date</label>
        <input type="date" name="workout[date]" id="workout_date" ref="date" />
        </div>
        </div>

        <div className="small-12 large-6 columns">
        <div className="field">
        <label htmlFor="workout_exercise_id">Exercise</label>
        <select name="workout[exercise_id]" id="workout_exercise_id" ref="exercise" >
          {this.props.dropDown}
        </select>
        </div>
        </div>
        </div>

        <div className="row">
        <div className="small-12 large-4 columns">
        <div className="field">
          <label htmlFor="workout_reps">Reps</label>
          <input type="number" name="workout[reps]" id="workout_reps" ref="reps" />
        </div>
        </div>

        <div className="small-12 large-4 columns">
        <div className="field">
          <label htmlFor="workout_sets">Sets</label>
          <input type="number" name="workout[sets]" id="workout_sets" ref="sets" />
        </div>
        </div>

        <div className="small-12 large-4 columns">
        <div className="field">
          <label htmlFor="workout_weight">Weight</label>
          <input type="text" name="workout[weight]" id="workout_weight" ref="weight" />
        </div>
        </div>
        </div>

        <input type="submit" name="commit" value="Save" onClick={this.handleClick} />
        </form>
        </div>
      </div>
    );
  }
}

export default WorkoutForm;
