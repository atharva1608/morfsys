import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SignUp from './SignUp';
import SignIn from './SignIn';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { MemoryRouter } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
  
      <Route exact path="/" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />

      </Routes>
    </Router>
   
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
