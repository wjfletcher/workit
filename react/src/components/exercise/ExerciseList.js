import React, { Component } from 'react';
import Exercise from './Exercise';

class ExerciseList extends Component{
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    let data;
    if (this.props.data != "") {
      data = this.props.data.map(exercise => {
        return(
          <Exercise
          key = {exercise.id}
          name = {exercise.name}
          description = {exercise.description}
          handleCategorySelect = {this.props.handleCategorySelect}
          />
        )
      })
    }
    return(
      <div>{data}</div>
    )
  }
};

export default ExerciseList;
