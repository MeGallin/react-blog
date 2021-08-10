import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import Header from './components/header/Header';
import Home from './views/home/Home';
import Footer from './components/footer/Footer';
import About from './views/about/About';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div id="app-wrapper">
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
