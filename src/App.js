import { Layout } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import AppFooter from './components/layout/Footer/AppFooter';
import AppHeader from './components/layout/Header/Header';
import ServiceList from './components/layout/ServiceList/ServiceList';
import ServicesState from './context/services/ServicesState';

const { Content } = Layout;

function App() {
  return (
    <ServicesState>
      <Router>
        <div className="App">
          <Layout>
            <AppHeader />
            <Content>
              <Switch>
                <Route exact path="/services" component={ServiceList} />
                <Route exact path="" component={ServiceList} />
                <Route exact path="/" component={AppHeader} />
              </Switch>
            </Content>
            <AppFooter />
          </Layout>
        </div>
      </Router>
    </ServicesState>
  );
}

export default App;
