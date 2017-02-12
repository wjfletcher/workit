import React, { Component } from 'react';


class WorkoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {

    let fetchBody = {
      workout: {
      authenticity_token: this.props.formAuth,
      date: this.refs.date.value,
      exercise_id: this.refs.exercise.value,
      reps: this.refs.reps.value,
      sets: this.refs.sets.value,
      weight: this.refs.weight.value
    }
  };

    fetch(`/api/v1/workouts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin',
      body: JSON.stringify(fetchBody) })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
          throw(error);
        }
      });

  }

  render() {
    let today = new Date();
    let month = ("0" + (today.getMonth()+1)).slice(-2);
    let day = ("0" + today.getDate()).slice(-2);
    let year = today.getFullYear();
    today = `${year}-${month}-${day}`
    return (

      <div className="form-element center">
        <form method="post" action="/workouts" >

        <input name="authenticity_token" value={this.props.formAuth} type="hidden" />

        <div className="row">
        <div className="field small-12 large-6 columns">
        <label htmlFor="workout_date" className="white-text">Date</label>
        <input type="date" name="workout[date]" id="workout_date" ref="date" defaultValue={today} required="required"/>
        </div>

        <div className="field small-12 large-6 columns">
        <label htmlFor="workout_exercise_id" className="white-text">Exercise</label>
        <select name="workout[exercise_id]" id="workout_exercise_id" ref="exercise" >
          {this.props.dropDown}
        </select>
        </div>
        </div>

        <div className="row">
        <div className="field small-12 large-4 columns">
          <label htmlFor="workout_reps" className="white-text">Reps</label>
          <input type="number" name="workout[reps]" id="workout_reps" ref="reps" required="required" />
        </div>

        <div className="field small-12 large-4 columns">
          <label htmlFor="workout_sets" className="white-text">Sets</label>
          <input type="number" name="workout[sets]" id="workout_sets" ref="sets" required="required"/>
        </div>

        <div className="field small-12 large-4 columns">
          <label htmlFor="workout_weight" className="white-text">Weight</label>
          <input type="text" name="workout[weight]" id="workout_weight" ref="weight" required="required"/>
        </div>
        </div>

        <input className="button" type="submit" name="commit" value="Save" onClick={this.handleClick} />
        </form>
        </div>

    );
  }
}

export default WorkoutForm;
