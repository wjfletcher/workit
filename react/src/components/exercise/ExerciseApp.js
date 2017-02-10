/* jshint esversion:6 */
import React from 'react';
import ExerciseList from './ExerciseList';

class ExerciseApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoulders: null,
      legs: null,
      abs: null,
      triceps: null,
      biceps: null,
      chest: null,
      back: null,
      selectedCategory: null
    }
    this.handleCategorySelect = this.handleCategorySelect.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.getExercises = this.getExercises.bind(this);
  }

  componentDidMount() {
    this.getExercises();
  }

  getExercises () {
    fetch(`/api/v1/exercises`, {
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
          shoulders: body.shoulders,
          legs: body.legs,
          abs: body.abs,
          triceps: body.triceps,
          biceps: body.biceps,
          chest: body.chest,
          back: body.back
        });
      });
  }

  handleCategorySelect(category){
    let selectedCategoryName = category.target.id
    this.setState({
      selectedCategory: selectedCategoryName
    });
  }

  render() {
    let categories = ["shoulders", "legs", "back", "abs", "triceps", "biceps", "chest"];
    let buttonClass;
    let data = "";
    categories = categories.map(category => {
      if (category == this.state.selectedCategory) {
        data = this.state[category];
        buttonClass = "button active";
      } else {
        buttonClass = "button";
      }

      return(
        <li>
          <button className={buttonClass} id={category} onClick={this.handleCategorySelect}>{category}</button>
        </li>
      )
    })

    return (
      <div>
        <div className = "column small-12 large-4">
          <h2 className="white-text">Muscle Group</h2>
          <ul>
            {categories}
          </ul>
          <h5><a href="/exercises/new" className="white-text">Add an exercise</a></h5>
        </div>
        <div className = "column small-12 large-8">
          <h2 className="white-text">Exercises</h2>
          <ul>
            <ExerciseList
              key = {1}
              data = {data}
            />
          </ul>
        </div>
      </div>
    );
  }
};

export default ExerciseApp;
