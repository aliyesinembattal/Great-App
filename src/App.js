import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Content from './components/layout/Content/Content';
import Footer from './components/layout/Footer/Footer';
import Header from './components/layout/Header/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Content />
        <Switch>
          <Route exact path="/" component={Header} />
          <Route exact path="/" component={Header} />
          <Route exact path="/" component={Header} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
