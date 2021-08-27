import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import Header from './components/header/Header';
import Home from './views/home/Home';
import Footer from './components/footer/Footer';
import About from './views/about/About';
import Admin from './components/blog/admin/Admin';
import Registration from './views/registration/Registration';
import Login from './views/login/Login';
import PrivateRoute from './components/privateRoute/PrivateRoute';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div id="app-wrapper">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/register" component={Registration} />
            <PrivateRoute exact path="/admin" component={Admin} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
