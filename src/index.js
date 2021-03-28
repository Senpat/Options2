import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'

import Header from "./components/Header"
import Body from "./components/Body"

import './style/style.css'

const App = () => {

  return (
    <div id='app'>
      <BrowserRouter>
        <Header />
        <Body />
      </BrowserRouter>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
