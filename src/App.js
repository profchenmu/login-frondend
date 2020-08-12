import React from 'react';

import './App.css';
import Login from './Login';
import Selecter from './Selecter';
import { BrowserRouter, Route } from "react-router-dom";
// import { createBrowserHistory } from "history";

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <BrowserRouter>
          <Route exact path='/' component={Login} />
          <Route exact path='/selecter' component={Selecter} />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
