import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//"Hey React, take what ever is in app.js and inject it into the index.html element called root"
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
//getElementById grabs the id of above is so react can inject the 
//compiled code into the index.html page.
