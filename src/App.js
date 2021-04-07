import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, About, Contact, NoMatch } from './pages/index';
import { Layout, NavigationBar } from './components/index';

const App = () => {
  return (
    <>
      <Router>
        <NavigationBar />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
      </Router>
    </>
  );
}

export default App;
