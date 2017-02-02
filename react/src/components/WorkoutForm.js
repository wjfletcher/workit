import React, { Component } from 'react';


class WorkoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <form method="post" action="/workouts" >
        <input name="authenticity_token" value={this.props.formAuth} type="hidden" />
        <select name="workout[exercise_id]" id="workout_exercise_id">
          {this.props.dropDown}
        </select>
          <label htmlFor="workout_date">Date</label>
          <input type="date" name="workout[date]" id="workout_date" />
        <div className="field">
          <label htmlFor="workout_reps">Reps</label>
          <input type="number" name="workout[reps]" id="workout_reps" />
        </div>
        <br />
        <div className="field">
          <label htmlFor="workout_sets">Sets</label>
          <input type="number" name="workout[sets]" id="workout_sets" />
        </div>
        <br />
        <div className="field">
          <label htmlFor="workout_weight">Weight</label>
          <input type="text" name="workout[weight]" id="workout_weight" />
        </div>
        <br />
        <input type="submit" name="commit" value="Save" />
        </form>
      </div>
    );
  }
}

export default WorkoutForm;
