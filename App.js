import React from 'react';
import Home from './component/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './component/Home/Header/Header';
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/header">
          <Header></Header>
        </Route>
        <Route path="/dashboard">
        
        </Route>
      </Switch>
   
  </Router>
  );
};

export default App;