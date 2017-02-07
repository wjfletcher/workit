import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Fitbit from './components/fitbit/Fitbit';

$(function() {
  if (document.getElementById('app')) {
    ReactDOM.render(
      <App/>,
      document.getElementById('app')
    );

    ReactDOM.render(
      <Fitbit/>,
      document.getElementById('fitbit')
    );
  }
});
