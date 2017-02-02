import React, { Component }  from 'react';
import ExerciseList from './ExerciseList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {

    return(
      <div>
        < ExerciseList />
      </div>
    );
  }
}

export default App;
