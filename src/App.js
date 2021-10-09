import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './components/layout/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/howitworks" component={Header} />
          <Route exact path="/advantages" component={Header} />
          <Route exact path="/services" component={Header} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
