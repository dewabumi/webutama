import React from 'react';
import './App.css';
import Home from './pages'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import WhyUsPage from './pages/whyus';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/whyus" component={WhyUsPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
