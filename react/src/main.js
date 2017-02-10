import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Fitbit from './components/fitbit/Fitbit';
import ExerciseApp from './components/exercise/ExerciseApp';

$(function() {
  if (document.getElementById('app')) {
    ReactDOM.render(
      <App/>,
      document.getElementById('app')
    );

    if (document.getElementById('fitbit')) {
      ReactDOM.render(
        <Fitbit/>,
        document.getElementById('fitbit')
      );
    }
  } else if (document.getElementById('exerciseapp')) {
    ReactDOM.render(
      <ExerciseApp/>,
      document.getElementById('exerciseapp')
    );
  }
});
